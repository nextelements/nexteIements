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
            background: '#fafafa',
            divider: '#e7e7e7',
            color: '#4b5563',
            link: {
              DEFAULT: '#6b7280',
              hover: '#202327',
              active: '#004ca3',
              'active-light': '#e0efff'
            },
            content: {
              1: '#ffffff',
              2: '#f3f4f6'
            },
          },
          colors: {
            muted: '#6b7280',
            shadow: '#000000'
          }
        },
        dark: {
          layout: {
            background: '#0a0a0a',
            divider: '#2a2a2a',
            color: '#f1f5f9',
            link: {
              DEFAULT: '#a3a3a3',
              hover: '#f1f5f9',
              active: '#0087e2',
              'active-light': '#172229'
            },
            content: {
              1: '#000000',
              2: '#0f0f0f'
            },
          },
          colors: {
            muted: '#6b7280',
            shadow: '#000000'
          },
        }
      }
    }) 
  ],
};
