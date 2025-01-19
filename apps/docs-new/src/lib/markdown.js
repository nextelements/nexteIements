import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

import { components } from './components'
import { plugins } from './plugins'

import { settings } from '../settings/settings'

const getSettings = () => {
  const { 
    remote: { 
      repository,
      enableSync
    }
  } = settings
  return { repository, enableSync }
}

const parseMDX = async function parseMDX(source) {
  return await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: { 
        ...plugins
      }
    },
    components
  })
}

const getFilePath = function getFilePath(slug) {
  const settings = getSettings()
  
  return settings.repository && settings.enableSync === true 
    ? `${settings.repository}/raw/main/src/content/${slug}/index.mdx`
    : path.join(process.cwd(), 'src/content', `${slug}/index.mdx`)
} 

const getDocumentPath = (() => {
  const cache = new Map()
  return (slug) => {
    if (!cache.has(slug)) {
      cache.set(slug, getFilePath(slug))
    }
    return cache.get(slug)
  }
})()

export const getDocument = async (slug) => {
  const settings = getSettings();
  let documentContent = null;
  let lastModified = null;

  async function fetchFromRemote(path) {
    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to fetch content from GitHub: ${response.statusText}`);
      }
      const content = await response.text();
      const modified = response.headers.get("Last-Modified") || null;
      return { content, modified };
    } catch (error) {
      console.error("Remote fetch error:", error);
      return { content: null, modified: null };
    }
  }

  // Helper function to fetch content from the local filesystem
  function readFromLocal(path) {
    try {
      const fileStats = fs.statSync(path);
      const content = fs.readFileSync(path, "utf-8");
      const modified = fileStats.mtime.toISOString();
      return { content, modified };
    } catch (error) {
      console.error("Local fetch error:", error);
      return { content: null, modified: null };
    }
  }

  try {
    const documentPath = getDocumentPath(slug);

    // Decide which method to use based on settings
    if (settings.repository && settings.enableSync === true) {
      const remoteResult = await fetchFromRemote(documentPath);
      documentContent = remoteResult.content;
      lastModified = remoteResult.modified;
    } else {
      const localResult = readFromLocal(documentPath);
      documentContent = localResult.content;
      lastModified = localResult.modified;
    }

    if (!documentContent) {
      throw new Error("Failed to load document content.");
    }

    // Parse the MDX content
    const { frontmatter, content } = await parseMDX(documentContent);

    // Generate the table of contents
    const tableOfContents = await extractHeadings(slug);

    return {
      matter: frontmatter,
      content,
      tableOfContents,
      lastModified,
    };
  } catch (error) {
    console.error("Error processing document:", error);
    return null;
  }
}

const headingPattern = /^(#{1,6})\s(.+)$/gm;

export async function extractHeadings(slug) {
  const settings = getSettings();
  const headings = [];
  let mdxContent = '';

  // Fetch MDX content from GitHub
  async function fetchFromRemote() {
    const remotePath = `${settings.repository}/raw/main/contents/docs/${slug}/index.mdx`;
    try {
      const response = await fetch(remotePath);
      if (!response.ok) {
        throw new Error(`Failed to fetch remote content: ${response.statusText}`);
      }
      return await response.text();
    } catch (err) {
      console.error("Remote fetch error:", err);
      return null;
    }
  }

  // Read MDX content from local filesystem
  async function readFromLocal() {
    const localPath = path.join(process.cwd(), "src/content", `${slug}/index.mdx`);
    try {
      const fileStream = fs.createReadStream(localPath, { encoding: "utf-8" });
      let content = '';
      for await (const chunk of fileStream) {
        content += chunk;
      }
      return content;
    } catch (err) {
      console.error("Local file read error:", err);
      return null;
    }
  }

  // Determine content source and load the MDX
  if (settings.repository && settings.enableSync === true) {
    mdxContent = await fetchFromRemote();
  } else {
    mdxContent = await readFromLocal();
  }

  if (!mdxContent) {
    return [];
  }

  // Extract headings using the regex pattern
  let match;
  while ((match = headingPattern.exec(mdxContent)) !== null) {
    const [_, hashes, text] = match;
    headings.push({
      level: hashes.length,
      text: text.trim(),
      href: `#${anchor(text)}`,
    });
  }

  return headings;
}

function anchor(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}