import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXProvider } from '@/layout/MDXProvider'

async function getMDXContent(category, slug, subslug) {
  const dir = path.join(process.cwd(), 'src/content')
  const errorPath = path.join(dir, '404', `error.mdx`)
  let filePath = path.join(dir, category, slug, `${subslug}.mdx`)

  if (!fs.existsSync(filePath)) {
    filePath = errorPath
  }

  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  const mdxSource = await serialize(content)

  return { 
    frontMatter: data, 
    mdxSource
  }
}

export async function generateMetadata({ params }) {
  const { category, slug, subslug } = await params
  const { frontMatter } = await getMDXContent(category, slug, subslug)

  return {
    title: `Documentation - ${frontMatter.title || '404'}`,
  }
}

export default async function DynamicMDXCategoryPage({ params }) {
  const { category, slug, subslug } = await params
  const { mdxSource, frontMatter } = await getMDXContent(category, slug, subslug)

  return <MDXProvider data={frontMatter} mdxSource={mdxSource} />
}
