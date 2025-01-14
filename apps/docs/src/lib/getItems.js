import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getItems = () => {
  const directoryPath = path.join(process.cwd(), 'src/content');
  const result = {};

  // Verarbeitet jede MDX-Datei
  const processFile = (filePath, category, subcategory) => {
    if (!filePath.endsWith('.mdx') || filePath.endsWith('index.mdx')) return;

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    const relativePath = filePath.replace(directoryPath, '');
    const sourcePath = filePath.replace(process.cwd(), '');
    const parts = relativePath.split('/');
    const fileFullName = parts.at(-1); // Last element
    const fileName = fileFullName?.replace('.mdx', '');
    const fileDir = `/${parts[1]}`;
    const subFilePath = subcategory === 'default' ? fileDir + '/' + fileName : fileDir + '/' + subcategory + '/' + fileName

    const entry = {
      order: data.order || 999,
      fileName,
      fileFullName,
      filePath: fileDir,
      fileFullPath: relativePath,
      fileSourcePath: sourcePath,
      origin: parts[1],
      extend: data.extend,
      title: data.title || 'Untitled',
      category,
      subcategory,
      slug: {
        path: fileDir,
        page: fileName,
        full: fileDir + '/' + fileName,
        href: subFilePath
      },
      ...data,
    };

    // Fügt das Ergebnis unter der jeweiligen Kategorie und Unterkategorie hinzu
    if (!result[category]) {
      result[category] = {};
    }

    if (!result[category][subcategory]) {
      result[category][subcategory] = [];
    }

    result[category][subcategory].push(entry);

    result[category][subcategory].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  };

  // Liest das Verzeichnis und verarbeitet alle Dateien
  const readDirectory = (dirPath) => {
    const files = fs.readdirSync(dirPath);
    const relativePath = dirPath.replace(directoryPath, '').slice(1);
    const [category, subcategory = 'default'] = relativePath.split('/');

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        readDirectory(filePath);
      } else {
        processFile(filePath, category, subcategory);
      }
    });
  };

  try {
    readDirectory(directoryPath);
  } catch (error) {
    console.error('Error reading directory:', error);
  }

  return result;
};
