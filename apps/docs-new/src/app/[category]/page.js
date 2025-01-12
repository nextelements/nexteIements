import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'src/content', 'components/accordion.mdx');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  // Serialisiere den MDX-Inhalt
  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource,
    },
  };
}

export default function Page({ mdxSource }) {
  return (
    <>
      <h1>MDX Content</h1>
      <MDXRemote {...mdxSource} />
    </>
  );
}






/*
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDX } from '@/layout'

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src/content');
  const categories = fs.readdirSync(contentDir);

  return categories.flatMap((category) => {
    const files = fs.readdirSync(path.join(contentDir, category));
    return files.map((file) => ({
      category
    }));
  });
}

export default async function Page({ params }) {
  const { category } = await params;

  const filePath = path.join(process.cwd(), 'src/content', category, `index.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <MDX content={content} />
    </>
  );
}
*/