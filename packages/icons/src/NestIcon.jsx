import React from 'react'

export const NestIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M2 2c.55 0 1 .45 1 1v5c0 2.21 1.79 4 4 4h8.59L13.3 9.71A.965.965 0 0113 9a1.003 1.003 0 011.71-.71l4 4c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-4 4a1.003 1.003 0 01-1.42-1.42l2.3-2.29H7c-3.31 0-6-2.69-6-6V3c0-.55.45-1 1-1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)