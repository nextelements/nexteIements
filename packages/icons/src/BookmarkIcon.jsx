import React from 'react'

export const BookmarkIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M6 0c-.55 0-1 .45-1 1v18c0 .55.32.68.71.29L9.3 15.7a.996.996 0 011.41 0l3.59 3.59c.38.39.7.26.7-.29v-8-4.5V1c0-.55-.45-1-1-1H6z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)