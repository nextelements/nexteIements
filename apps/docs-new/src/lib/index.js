import fs from 'file-system'
import path from 'path'
import matter from 'gray-matter';
import { capitalize } from '@/utils/functions';
import { serialize } from 'next-mdx-remote/serialize';

const contentDirectory = path.join(process.cwd(), 'src/content');

export function getAllMdxFiles() {
  const categories = fs.readdirSync(contentDirectory);

  return categories.flatMap((category) => {
    const dir = path.join(contentDirectory, category);
    const files = fs.readdirSync(dir);

    return files.map((fileName) => {
      if(fileName == 'index.mdx') return
      const filePath = path.join(dir, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        category,
        linkname: data?.title || fileName,
        fileName: fileName === 'index.mdx' ? data?.title : capitalize(fileName.slice(0, fileName.length - 4)),
        ...data,
      };
    });
  });
}

const getMdxFileContent = (category, slug) => {
  const filePath = path.join(process.cwd(), 'src', 'content', category, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  return {
    content: content,
    metadata: data,
  };
};

export const getMdxContent = async (category, slug) => {
  const { content, metadata } = getMdxFileContent(category, slug);
  const mdxSource = await serialize(content);

  return {
    mdxSource,
    metadata,
  };
};