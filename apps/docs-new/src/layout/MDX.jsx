'use client'

import { MDXProvider } from '@mdx-js/react';

const components = {
  h1: (props) => <h1 style={{ color: 'blue' }} {...props} />,
};

const MDX = ({ content }) => {
  return (
    <MDXProvider components={components}>
      <div>{content}</div>
    </MDXProvider>
  );
};

export { MDX }