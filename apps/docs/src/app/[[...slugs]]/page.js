import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXProvider } from '@/layout/MDXProvider'
import { notFound } from 'next/navigation'

const getContent = async ({ params }) => {

  const { slugs } = await params

  const getPath = (slugs) => {
    let result = null
    let slugCases = slugs.length
    let [ A, B, C ] = slugs

    switch (slugCases) {
      case 1:
        result = path.join(process.cwd(), 'src/content', A, 'index.mdx')
      break;
      case 2:
        result = path.join(process.cwd(), 'src/content', A, B + '.mdx')
      break;
      case 3:
        result = path.join(process.cwd(), 'src/content', A, B, C + '.mdx')
      break;
    }

    if (!fs.existsSync(result)) {
      notFound()
    }

    return result
  }

  const paths = getPath(slugs)
  const fileContent = fs.readFileSync(paths, 'utf-8')
  const { data, content } = matter(fileContent)
  const mdxSource = await serialize(content)

  return {
    data,
    source: mdxSource
  }
}

export default async function ({ params }) {
  const { data, source } = await getContent({ params })
  return <MDXProvider data={data} mdxSource={source} />
}
