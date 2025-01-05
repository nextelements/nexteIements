/** @type {import('tailwindcss').Config} */

import { NextElements } from '@nextelements/themes/plugin'

export default {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    '../../packages/**/*.{jsx,js,ts,tsx,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [ 
    NextElements({
      themes: {
        customTheme: {
          extend: 'dark',
          layout: {
            background: '#555555',
            foreground: '#eeeeee'
          },
        }
      }
    }) 
  ],
};
