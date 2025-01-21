import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BASE_PATH = 'docs';
const SETTINGS_FILE = 'directory.json';
const CONTENT_PATH = 'contents';
export const fileMappings = new Map();

/**
 * Creates the structure from the content directory and applies configurations.
 * @returns {Array} A sorted list of directories and files.
 */
export function createStructure() {
  const items = processDirectory(path.join(process.cwd(), CONTENT_PATH));
  const config = extractConfig(items);
  return applyConfig(items, config);
}

/**
 * Recursively processes a directory and returns a list of folders and files.
 * @param {string} directory - The path to the directory to process.
 * @returns {Array} A list of objects representing folders and files.
 */
const processDirectory = (directory) => {
  const result = [];

  try {
    const files = fs.readdirSync(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      const filename = cleanFileName(file);
      const href = createClientPath(filePath);

      if (stat.isDirectory()) {
        // If it's a directory, process it recursively
        const items = processDirectory(filePath);
        if (/\[.*?\]|\(.*?\)/.test(filename)) {
          result.push(...items);
        } else {
          result.push({
            type: 'folder',
            folder: filename,
            title: toProperCase(filename),
            items,
          });
        }
      } else {
        // If it's a file, handle it
        handleFile(result, filePath, filename, href);
      }
    }
  } catch (error) {
    console.error('Error processing directory:', error);
  }

  return result;
};

/**
 * Adds a file to the result list and stores the mappings.
 * @param {Array} result - The result array where the file will be added.
 * @param {string} filePath - The full path of the file.
 * @param {string} filename - The name of the file.
 * @param {string} href - The formatted URL path of the file.
 */
const handleFile = (result, filePath, filename, href) => {
  if (isJSONFile(filePath)) {
    result.push({
      type: 'json',
      source: filePath,
      order: Number.MAX_SAFE_INTEGER
    });
  } else {
    const data = getFrontmatter(filePath);
    result.push({
      type: 'file',
      file: filename,
      title: data?.title || toProperCase(filename),
      matter: data,
      href: formatHref(href),
    });

    const slug = ((slug) => slug.endsWith('/') ? slug.slice(0, -1) : slug)(href.split('/').slice(1).join('/'));
    fileMappings.set(slug, filePath);
  }
};

/**
 * Extracts all configuration files from the structure.
 * @param {Array} items - The structure to search through.
 * @returns {Array} A list of configuration files.
 */
const extractConfig = (items) => {
  const config = items.filter((item) => item.type === 'json');
  
  /**
   * Recursively searches for configuration files within the structure.
   * @param {Array} items - The structure to search through.
   */
  const recursiveFindConfig = (items) => {
    items.forEach((item) => {
      if (item.type === 'folder') {
        const jsonConfig = item.items.find((prop) => prop.type === 'json');
        if (jsonConfig) config.push(jsonConfig);
        recursiveFindConfig(item.items);
      }
    });
  };
  recursiveFindConfig(items);
  return config;
};

/**
 * Applies the configuration to the structure by updating items with settings.
 * @param {Array} items - The structure of items to process.
 * @param {Array} config - The configuration settings to apply.
 * @returns {Array} The sorted structure with applied configurations.
 */
const applyConfig = (items, config) => {
  const settings = config.map(({ source }) => getSettings(source) || {});

  const processItems = (items) => {
    if (!Array.isArray(items)) {
      console.error('Expected an array, but got', items);
      return [];
    }

    settings.forEach((setting) => {
      Object.keys(setting).forEach((key) => {
        items.forEach((item) => {
          if (item.type === 'folder' && item.folder.toLowerCase() === key.toLowerCase()) {
            item.order = setting[key]?.order || Number.MAX_SAFE_INTEGER;
            item.title = setting[key]?.title || item.title;
          }
          if (Array.isArray(item.items)) processItems(item.items);
        });
      });
    });

    items.forEach((item) => {
      if (item.type === 'file') {
        item.order = item.matter?.order || Number.MAX_SAFE_INTEGER;
      }
    });

    return items.sort((a, b) => a.order - b.order);
  };

  return processItems(items);
};

/*
 * Reads and parses a JSON settings file if it matches the expected name.
 * @param {string} filePath - The path of the settings file.
 * @return {object|undefined} The parsed JSON content if the file is valid, otherwise undefined.
 */
export const getSettings = (filePath) => {
  if (filePath.includes(SETTINGS_FILE)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }
  return undefined;
};

/*
 * Extracts frontmatter metadata from a markdown file.
 * @param {string} filePath - The path of the markdown file.
 * @return {object} The frontmatter data from the markdown file, or an empty object if not found.
 */
export const getFrontmatter = (filePath) => {
  if (isMarkdownFile(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    return matter(content).data || {};
  }
  return {};
};

/*
 * Converts a file path to a client-friendly URL format.
 * @param {string} filePath - The original file path.
 * @return {string} The transformed client-friendly path.
 */
export const createClientPath = (filePath) => {
  return BASE_PATH + '/' + filePath
    .replace(process.cwd(), '')
    .split('/').slice(2).join('/')
    .replace(/\[([^\]]+)\]|\(([^\)]+)\)/g, '$1')
    .replace(/\/index\.mdx$/, '/')
    .replace(/\.mdx/g, '')
    .replace(/^(\d+(\.\d+)?)-?/g, '')
    .toLowerCase();
};

/*
 * Cleans a given filename by removing the extension and leading numeric values.
 * @param {string} file - The filename to clean.
 * @return {string} The cleaned filename without the extension and leading numbers.
 */
export const cleanFileName = (file) => {
  return file.replace(/\.mdx$/, '').replace(/^(\d+(\.\d+)?)-?/g, '').toLowerCase();
};

/*
 * Formats a given URL to ensure it has a leading slash and no trailing slash.
 * @param {string} href - The URL to format.
 * @return {string} The formatted URL ensuring a leading slash and no trailing slash.
 */
export const formatHref = (href) => {
  return href.endsWith('/') ? `/${href.slice(0, -1)}` : `/${href}`;
};

/*
 * Converts a string to proper case, capitalizing each word split by the given delimiter.
 * @param {string} text - The text to convert.
 * @param {string} [delimiter='-'] - The delimiter used to split the text.
 * @return {string} The text in proper case format.
 */
export const toProperCase = (text, delimiter = '-') => {
  return text.split(delimiter).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};

/*
 * Checks if a given file path corresponds to a JSON file.
 * @param {string} filePath - The file path to check.
 * @return {boolean} True if the file is a JSON file, otherwise false.
 */
export const isJSONFile = (filePath) => {
  return filePath.endsWith('.json');
};

/*
 * Checks if a given file path corresponds to a Markdown file.
 * @param {string} filePath - The file path to check.
 * @return {boolean} True if the file is a Markdown file, otherwise false.
 */
export const isMarkdownFile = (filePath) => {
  return filePath.endsWith('.mdx');
};
