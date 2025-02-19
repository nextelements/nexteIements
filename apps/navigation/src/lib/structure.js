import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { 
  hasOrderPrefix, 
  getOrderPrefix, 
  incrementDecimal,
  isFile,
  removeMDXFromURL,
  toProperCase,
  computedSlug
} from './utils';

let currentItemOrder = 0;

export const slugmap = new Map();

export const createStructure = (dir = path.join(process.cwd(), 'content')) => {
  const result = [];

  let currentFileOrder = 1;

  try {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const processPath = path.join(dir, file);
      const sourcePath = processPath.replace(process.cwd(), '').replace('content', 'docs');

      const pathSegments = sourcePath.split('/');
      const computedPath = pathSegments.slice(2, 3).at(0).replace(/^(\d+(\.\d+)?)-?/, '');
      const fileName = file.replace(/\.mdx$/, '').replace(/^(\d+(\.\d+)?)-?/, '');
      const href = `${computedPath}/${pathSegments.slice(3).join('/')}`;

      const stat = fs.statSync(processPath);
      const content = isFile(processPath) ? fs.readFileSync(processPath, 'utf-8') : undefined;
      const { data } = content ? matter(content) : {};

      const mainDirectory = sourcePath.split('/').slice(1).at(-1);

      let currentOrder = undefined;
      if (hasOrderPrefix(mainDirectory)) {
        currentOrder = getOrderPrefix(mainDirectory);
      }

      if (stat.isDirectory()) {
        const items = createStructure(processPath);
        const inBrackets = /\(.*\)/.test(fileName);

        if (inBrackets) {
          result.push(...items);
        } else {
          result.push({
            order: currentOrder,
            type: 'folder',
            title: toProperCase(fileName),
            items,
          });
        }
      } else {
        let newSlug = removeMDXFromURL(href);
        if (newSlug.endsWith('/')) {
          newSlug = newSlug.toLowerCase().slice(0, -1);
        }
        
        slugmap.set(computedSlug(newSlug), processPath);

        result.push({
          type: 'file',
          order: data?.order || -1,
          title: data.title || toProperCase(fileName),
          href: `/${path.join('docs', computedSlug(newSlug))}`,
        });

        currentFileOrder += 1;
      }
    });
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err);
  }

  const sortedResult = sortItems(result);

  console.log(JSON.stringify(sortedResult, null, 2))

  return sortedResult;
};

const sortItems = (items, reverse) => {
  return items
    .map((item) => {
      if (item.items && item.items.length > 0) {
        item.items = sortItems(item.items, true); // Sortiere Unterelemente
      }
      return item;
    }).sort((a, b) => !reverse ? a.order - b.order : b.order - a.order)
};