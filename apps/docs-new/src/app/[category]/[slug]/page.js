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
      category,
      slug: file.replace(/\.md$/, ''),
    }));
  });
}

export default async function Page({ params }) {
  const { category, slug } = await params;

  const filePath = path.join(process.cwd(), 'src/content', category, `${slug}.md`);
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