import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXProvider } from '@/layout/MDXProvider'

async function getMDXContent(category, slug) {
  const postsDirectory = path.join(process.cwd(), 'src/content')
  const filePath = path.join(postsDirectory, category, `${slug || 'index'}.mdx`)

  if (!fs.existsSync(filePath)) {
    throw new Error('MDX-Datei nicht gefunden');
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
  const { category, slug } = await params
  const { frontMatter } = await getMDXContent(category, slug)

  return {
    title: frontMatter.title,
  }
}

export default async function DynamicMDXCategoryPage({ params }) {
  const { category, slug } = await params
  const { mdxSource, frontMatter } = await getMDXContent(category, slug)

  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <MDXProvider mdxSource={mdxSource} />
    </div>
  )
}
