'use client'

import { MDXProvider } from '@mdx-js/react';

const MDX = ({ content }) => {
  return <MDXProvider>{ content }</MDXProvider>
}

export { MDX }