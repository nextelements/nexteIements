import React from 'react'

export const RigIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M7 4.2C7 5.75 8.34 7 10 7s3-1.46 3-2.8C13 1.45 10.94 0 10 0H6c0 2.74 3.76 1.96 1 4.2zm11.71 14.09L13 12.59V9.01c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v3.58l-5.71 5.7a1.003 1.003 0 001.42 1.42L7 15.42V19c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3.58l4.29 4.29a1.003 1.003 0 001.42-1.42zM10.21 8c.01 0 .01.01 0 0 .01.01.01 0 0 0z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)