import fs from 'file-system'
import path from 'path'
import matter from 'gray-matter';
import { capitalize } from '@/utils/functions';

const isFile = (str) => {
  const extension = /\.(md)$/i
  return RegExp(extension).test(str)
};

export const getNavigationItems = () => {
  const items = {}
  const directories = fs.readdirSync(path.join(process.cwd(), 'src/content'))

  directories.forEach((directory) => {
    if (!isFile(directory)) {
      items[directory] = []

      fs.readdirSync(path.join(process.cwd(), 'src/content', directory)).forEach((item) => {
        const title = directory
        const fullName = item
        const name = item.slice(0, fullName.length - 3)
        const extension = item.slice(fullName.length - 3)
        const path = `../${directory}/${name}`
        const dir = `${directory}/`

        items[directory].push({
          title,
          name,
          fullName,
          extension,
          path,
          dir,
        })
      })
    }
  })
  console.log(items)
  return items
}

const contentDirectory = path.join(process.cwd(), 'src/content');

export function getAllMdxFiles() {
  const categories = fs.readdirSync(contentDirectory);

  return categories.flatMap((category) => {
    const dir = path.join(contentDirectory, category);
    const files = fs.readdirSync(dir);

    return files.map((fileName) => {
      if(fileName == 'index.md') return
      const filePath = path.join(dir, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        category,
        linkname: data?.title || fileName,
        fileName: fileName === 'index.md' ? data?.title : capitalize(fileName.slice(0, fileName.length - 3)),
        ...data,
      };
    });
  });
}