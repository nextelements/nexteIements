/** @type {import('tailwindcss').Config} */

import { NextElements } from '@nextelements/themes/plugin'

export default {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    '../../packages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [ 
    NextElements({
      prefix: 'reactify',
      themes: {
        light: {
          layout: {
            background: '#fff',
            color: '#333',
            link: {
              DEFAULT: '#888',
              hover: '#555'
            },
            base: '#53c1de',
            footer: 'transparent',
          },
        },
        dark: {
          layout: {
            background: '#030303',
            color: '#eee',
            link: {
              DEFAULT: '#d0d0d0',
              hover: '#a0a0a0'
            },
            base: '#53c1de',
            footer: 'transparent',
          },
        }
      }
    }) 
  ],
};
