const fs = require("fs");
const path = require("path");
const { IconSvgPaths20 } = require("@blueprintjs/icons");

const OUTPUT_EXTENSION = '.jsx';
const OUTPUT_DIR = path.join(__dirname, "../__GENERATED__");
const ICON_SUBFOLDER = path.join(OUTPUT_DIR, "icons");

const iconExports = [];
const iconMap = [];

function generateIconComponent(name, paths20) {
  return `
import React from 'react';

export const ${name}Icon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {${JSON.stringify(paths20)}.map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);
  `.trim();
}

function saveIconFile(name, paths20) {
  const componentName = `${name}Icon`;
  const fileName = `${componentName}${OUTPUT_EXTENSION}`;
  const content = generateIconComponent(name, paths20);

  try {
    fs.writeFileSync(path.join(ICON_SUBFOLDER, fileName), content);
    iconExports.push(`export { ${componentName} } from './icons/${fileName.replace(OUTPUT_EXTENSION, "")}';`);
    iconMap.push({ name, component: componentName });
  } catch (err) {
    console.error(`Failed to write file for icon: ${name}`, err);
  }
}

async function createDirectories() {
  try {
    if (!fs.existsSync(ICON_SUBFOLDER)) {
      fs.mkdirSync(ICON_SUBFOLDER, { recursive: true });
      console.log('Icon subfolder created.');
    }
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
      console.log('Output directory created.');
    }
  } catch (err) {
    console.error("Error creating directories:", err);
    throw err;
  }
}

async function generateIcons() {
  try {
    for (const [name, paths20] of Object.entries(IconSvgPaths20)) {
      saveIconFile(name, paths20);
    }

    const indexContent = iconExports.join("\n");
    fs.writeFileSync(path.join(OUTPUT_DIR, "index.jsx"), indexContent);

    const iconMapContent = `
export const iconMap = ${JSON.stringify(iconMap, null, 2)};
`;
    fs.writeFileSync(path.join(OUTPUT_DIR, "icon.map.js"), iconMapContent);

    console.log("Icons and supporting files successfully generated!");
  } catch (err) {
    console.error("Error generating icons:", err);
  }
}

async function main() {
  try {
    await createDirectories();
    await generateIcons();
  } catch (err) {
    console.error("Error in the script:", err);
  }
}

main();
