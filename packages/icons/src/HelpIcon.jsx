import React from 'react'

export const HelpIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM7.41 4.62c.65-.54 1.51-.82 2.56-.82.54 0 1.03.08 1.48.25.44.17.83.39 1.14.68.32.29.56.63.74 1.02.17.39.26.82.26 1.27s-.08.87-.24 1.23c-.16.37-.4.73-.71 1.11l-1.21 1.58c-.14.17-.28.33-.32.48-.05.15-.11.35-.11.6v.97H9v-2s.06-.58.24-.81l1.21-1.64c.25-.3.41-.56.51-.77s.14-.44.14-.67c0-.35-.11-.63-.32-.85s-.5-.33-.88-.33c-.37 0-.67.11-.89.33-.22.23-.37.54-.46.94-.03.12-.11.17-.23.16l-1.95-.29c-.12-.01-.16-.08-.14-.22.13-.93.52-1.67 1.18-2.22zM9 14h2.02L11 16H9v-2z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)