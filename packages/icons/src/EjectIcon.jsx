import React from 'react'

export const EjectIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M4 12h12c.55 0 1-.45 1-1 0-.25-.1-.47-.25-.64l.01-.01-6-7-.01.01C10.57 3.14 10.3 3 10 3s-.57.14-.75.36l-.01-.01-6 7 .01.01c-.15.17-.25.39-.25.64 0 .55.45 1 1 1zm12 1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)