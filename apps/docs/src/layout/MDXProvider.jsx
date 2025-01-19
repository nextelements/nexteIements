'use client'

import { MDXRemote } from 'next-mdx-remote';
import { IconLibrary } from '@/components/IconLibrary';
import { StepTree, StepTreeItem } from '@/components/StepTree';
import { Code } from '@/components/Code';
import { Heading } from '@/components/TableOfContents/TOC';

import { Button } from '@nextelements/components';

const components = {
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  IconLibrary,
  StepTree,
  StepTreeItem,
  Button,
  Code
};

export const MDXProvider = ({ mdxSource, data }) => {
  return <MDXRemote {...mdxSource} components={components} />  
};