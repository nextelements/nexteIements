import fs from 'file-system'
import path from 'path'
import matter from 'gray-matter';
import { capitalize } from '@/utils/functions';

const contentDirectory = path.join(process.cwd(), 'src/content');

export function getAllMdxFiles() {
  const categories = fs.readdirSync(contentDirectory);

  return categories.flatMap((category) => {
    const dir = path.join(contentDirectory, category);
    const files = fs.readdirSync(dir);

    return files.map((fileName) => {
      if(fileName == 'index.mdx') return
      const filePath = path.join(dir, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        category,
        linkname: data?.title || fileName,
        fileName: fileName === 'index.mdx' ? data?.title : capitalize(fileName.slice(0, fileName.length - 4)),
        ...data,
      };
    });
  });
}