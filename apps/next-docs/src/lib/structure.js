import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import config from '../config/docs.config'

export const storage = new Map()

const basePath = 'docs'
const contentPath = 'contents'

export const createStructure = function createStructure (directory = path.join(process.cwd(), contentPath)) {
  const result = []

  try {
    const files = fs.readdirSync(directory)

    files.forEach((file) => {
      const processPath = path.join(directory, file)
      const data = getFrontmatter(processPath)
      const stat = fs.statSync(processPath)
      const filename = cleanFileName(file)
      const settings = getSettings(processPath)

      const segments = processPath.replace(process.cwd(), '').split('/').slice(2).join('/')
      const href = createClientPath(segments)

      if(settings) {
        Object.keys(settings).forEach((key) => {
          result.filter((a) => a?.dirname?.toLowerCase() == key.toLowerCase()).map((item) => {
            item.order = settings[key]?.order
            return item
          })
        })
      }

      if (stat.isDirectory()) {
        // dir
        const items = createStructure(processPath)
        const inBrackets = /\[.*?\]|\(.*?\)/.test(filename);

        if(inBrackets) {
          result.push(
            ...items
          )
        } else {
          result.push({
            order: undefined,
            type: 'folder',
            dirname: cleanFileName(file),
            title: filename,
            items
          })
        }
      } else if(!isJSONFile(processPath)) {
         result.push({
          order: undefined,
          type: 'file',
          title: data?.title || filename,
          href: href.endsWith('/') 
            ? href.slice(0, -1)
            : href
        })
      }
    })
  } catch (e) {
    console.error(e)
  }
  const sortedResult = result.sort((a, b) => a.order - b.order)
  console.log(JSON.stringify(sortedResult, null, 3))
  return sortedResult
}

function getSettings (path)  {
  if(path.includes('directory.json')) {
    let data = fs.readFileSync(path, 'utf-8')
    return JSON.parse(data)
  }
  return null
}

function createClientPath (_path) {
  return removeExtension(basePath + '/' + _path.replace(/^(\d+(\.\d+)?)-?/, '').replace(/\[([^\]]+)\]|\(([^\)]+)\)/, "$1"))?.toLowerCase()
}

function cleanFileName (file) {
  return file.replace('.mdx', '').replace(/^(\d+(\.\d+)?)-?/, '').toLowerCase()
}

function getFrontmatter (path) {
  if(isMarkdownFile(path)) {
    const content = fs.readFileSync(path, 'utf-8')
    if(content) {
      const { data } = matter(content)
      return data
    }
  }
}

function isJSONFile (path) {
  return path.includes('.json') || path.endsWith('.json') 
}

function isMarkdownFile (path) {
  return path.includes('.mdx') || path.endsWith('.mdx') 
}

function removeExtension (path) {
  return isMarkdownFile(path) ? path.replace(/\/index\.mdx$/, '/').replace(/\.mdx/g, '') : undefined
}