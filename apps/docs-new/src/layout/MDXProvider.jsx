'use client'

import { MDXRemote } from 'next-mdx-remote';
import { IconLibrary } from '@/components/IconLibrary';

const components = {
  h1: (props) => <h1 {...props} />,
  IconLibrary
};

export const MDXProvider = ({ mdxSource, data }) => {
  return (
    <>
      <h1 className="mb-6 font-extrabold">{data.title}</h1>
      <MDXRemote {...mdxSource} components={components} />  
    </>
  );
};