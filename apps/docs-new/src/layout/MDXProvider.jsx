'use client'

import { MDXRemote } from 'next-mdx-remote';

const components = {
  h1: (props) => <h1 style={{ color: 'blue' }} {...props} />,
};

export const MDXProvider = ({ mdxSource }) => {
  return (
    <MDXRemote {...mdxSource} components={components} />
  );
};