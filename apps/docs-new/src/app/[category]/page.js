import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXProvider } from '@/layout/MDXProvider'
import { redirect } from 'next/navigation'

async function getMDXContent(category) {
  const dir = path.join(process.cwd(), 'src/content')
  let filePath = path.join(dir, category, `index.mdx`)

  if (!fs.existsSync(filePath)) {
    return redirect('./')
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
  const { category } = await params
  const { frontMatter } = await getMDXContent(category)

  return {
    title: frontMatter.title,
  }
}

export default async function DynamicMDXCategoryPage({ params }) {
  const { category } = await params
  const { mdxSource, frontMatter } = await getMDXContent(category)

  return <MDXProvider data={frontMatter} mdxSource={mdxSource} />
}
