import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
const isFile = (filePath) => filePath.endsWith('.mdx')
const createResult = () => ({})

const processFile = (filePath, slug, target, result) => {
  if (!isFile(filePath)) return

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data: frontMatter } = matter(fileContent)
    const relativePath = filePath.replace(target, '')
    
    let [category, page] = relativePath.split('/').slice(1)
    const pathname = `/docs/${category}/${page.replace('index.mdx', '')}`

    const key = capitalize(category)
    const title = frontMatter?.title || slug || category
    const href = pathname.endsWith('/') ? pathname.slice(0, pathname.length - 1) : pathname
    const order = 0

    result[key] = result[key] || []
    result[key].push({ 
      order, 
      title, 
      href
    })

    result[key].sort((a, b) => (b.order ?? 0) - (a.order ?? 0))
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error)
  }
}

const readDirectory = (directory, target, result) => {
  const files = fs.readdirSync(directory)
  const relativePath = directory.replace(target, '').slice(1)
  const [slug] = relativePath.split('/').slice(1)

  files.forEach((file) => {
    const filePath = path.join(directory, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      readDirectory(filePath, target, result)
    } else {
      processFile(filePath, slug, target, result)
    }
  })
}

export const getItems = () => {
  let cachedItems = null
  const target = path.join(process.cwd(), 'src/content')

  if (cachedItems) return cachedItems

  const result = createResult()

  try {
    readDirectory(target, target, result)
  } catch (error) {
    console.error('Error reading directory:', error)
  }

  cachedItems = result
  return cachedItems
}
