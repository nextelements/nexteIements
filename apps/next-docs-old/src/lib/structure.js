import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const basePath = 'docs'
const contentPath = 'contents'
const settingsFileName = 'directory.json'

const processStructure = function processStructure (directory = path.join(process.cwd(), contentPath)) {
  const result = []

  try {
    const files = fs.readdirSync(directory)

    files.forEach((file) => {
      const processPath = path.join(directory, file)
      const data = getFrontmatter(processPath)
      const stat = fs.statSync(processPath)
      const filename = cleanFileName(file)

      const href = createClientPath(processPath)

      if(stat.isDirectory()) {

        const items = processStructure(processPath)
        const inBrackets = /\[.*?\]|\(.*?\)/.test(filename);

        if(inBrackets) {
          result.push(
            ...items
          )
        } else {
          result.push({
            type: 'folder',
            folder: cleanFileName(file),
            title: toProperCase(filename),
            items,
          })
        }
      } else if(!isJSONFile(processPath)) {
         result.push({
          type: 'file',
          file: filename,
          title: data?.title || toProperCase(filename),
          matter: data,
          href: href.endsWith('/') 
            ? `/${href.slice(0, -1)}`
            : `/${href}`
        })
        fileMappings.set(href, processPath)
      } else {
        result.push({
          type: 'json',
          source: processPath,
          order: Infinity
        })
      }
    })
  } catch (e) {
    console.error(e)
  }

  return result
}

export function createStructure () {
  const items = processStructure();
  const config = [];

  config.push(
    items.find((prop) => prop.type === 'json')
  );

  const mergeConfig = (items) => {
    (function recursiveMerge(items) {
      items.forEach((item) => {
        if (item.type === 'folder') {
          const target = item.items.find((prop) => prop.type === 'json');
          if (target) {
            config.push(target);
          }
          recursiveMerge(item.items);
        }
      });
    })(items);

    const processConfig = (items) => {
      if (!Array.isArray(items)) {
        console.error('processConfig: Expected an array, but got', items);
        return [];
      }

      const settings = config.map(({ source }) => getSettings(source) || {});

      if (settings.length > 0) {
        settings.forEach((item) => {
          Object.keys(item || {}).forEach((key) => {
            items.forEach((folderItem) => {
              if (folderItem?.type === 'folder' && folderItem?.folder?.toLowerCase() === key.toLowerCase()) {
                folderItem.order = item[key]?.order || Number.MAX_SAFE_INTEGER;
                folderItem.title = item[key]?.title || folderItem.title;
              }
              if (Array.isArray(folderItem.items) && folderItem.items.length > 0) {
                processConfig(folderItem.items);
              }
            });
          });
        });
        items.forEach((item) => {
          if(item.type === 'file') {
            item.order = item.matter?.order
          }
        })
      }
      return items.sort((a,b) => a.order - b.order);
    };
    
    return processConfig(items);
  };

  const result = mergeConfig(items);
  const sortedResult = result.sort((a, b) => (a.order || Number.MAX_SAFE_INTEGER) - (b.order || Number.MAX_SAFE_INTEGER));
  return sortedResult
}

export const fileMappings = new Map()

const getSettings = (path) => {
  if(path.includes(`${settingsFileName}`)) {
    let data = fs.readFileSync(path, 'utf-8')
    return JSON.parse(data)
  }
  return undefined
}

const createClientPath = (path) => {
  return basePath + '/' + path.replace(process.cwd(), '').split('/').slice(2).join('/').replace(/\[([^\]]+)\]|\(([^\)]+)\)/, "$1").replace(/\/index\.mdx$/, '/').replace(/\.mdx/g, '').replace(/^(\d+(\.\d+)?)-?/g, '').toLowerCase()
}

const cleanFileName = (file) => {
  return file.replace('.mdx', '').replace(/^(\d+(\.\d+)?)-?/g, '').toLowerCase()
}

const getFrontmatter = (path) => {
  if(isMarkdownFile(path)) {
    const content = fs.readFileSync(path, 'utf-8')
    if(content) {
      const { data } = matter(content)
      return data
    }
  }
}

const isJSONFile = (path) => {
  return path.includes('.json') || path.endsWith('.json') 
}

const isMarkdownFile = (path) => {
  return path.includes('.mdx') || path.endsWith('.mdx') 
}

const toProperCase = (text, split = '-') => {
  return text
    .split(split)
    .map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');
}