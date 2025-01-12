const { 
  installDependency, 
  isDependencyInstalled 
} = require('./scripts-utils')

const { IconSvgPaths20 } = require('@blueprintjs/icons')

const fs = require('fs')
const path = require('path')

const OUTPUT_SUBFOLDER = 'src'
const OUTPUT_EXTENSION = '.jsx'

const OUTPUT_DIR = path.join(__dirname, '../packages/icons')
const ICON_SUBFOLDER = path.join(OUTPUT_DIR, OUTPUT_SUBFOLDER)

const iconExports = []
const iconMap = []

function generateIconComponent(name, svg) {
  return `
import React from 'react'

export const ${name}Icon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {${JSON.stringify(svg)}.map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)
  `.trim()
}

function saveIconFile(name, svg) {
  const componentName = `${name}Icon`
  const fileName = `${componentName}${OUTPUT_EXTENSION}`
  const content = generateIconComponent(name, svg)

  try {
    fs.writeFileSync(path.join(ICON_SUBFOLDER, fileName), content)
    iconExports.push(`export { ${componentName} } from './${OUTPUT_SUBFOLDER}/${fileName.replace(OUTPUT_EXTENSION, '')}'`)
    iconMap.push({ name, component: componentName })
  } catch (err) {
    console.error(`Failed to write file for icon: ${name}`, err)
  }
}

async function createDirectories() {
  try {
    if (!fs.existsSync(ICON_SUBFOLDER)) {
      fs.mkdirSync(ICON_SUBFOLDER, { recursive: true })
      console.log('Icon subfolder created.')
    }
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true })
      console.log('Output directory created.')
    }
  } catch (err) {
    console.error('Error creating directories:', err)
    throw err
  }
}

async function generateIcons() {
  try {
    for (const [ name, svg ] of Object.entries(IconSvgPaths20)) {
      saveIconFile(name, svg)
    }

    fs.writeFileSync(path.join(OUTPUT_DIR, './index.js'), iconExports.join('\n'))
    fs.writeFileSync(path.join(OUTPUT_DIR, './icon.map.js'), `export const iconMap = ${JSON.stringify(iconMap, null, 2)};`)
    console.log('Icons and supporting files successfully generated!')
  } catch (err) {
    console.error('Error generating icons:', err);
  }
}

async function main() {
  try {
    if (!isDependencyInstalled('@blueprintjs/icons')) {
      installDependency('@blueprintjs/icons', true)
    }

    await createDirectories()
    await generateIcons()
  } catch (err) {
    console.error('Error in the script:', err)
  }
}

main()