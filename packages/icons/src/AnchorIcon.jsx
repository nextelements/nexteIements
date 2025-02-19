import React from 'react'

export const AnchorIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M11 5.83a3.001 3.001 0 10-2 0V7H6v2h3v8.917a6.003 6.003 0 01-4.985-5.488l.278.278a1 1 0 001.414-1.414l-2-2a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414l.303-.303a8 8 0 0015.98 0l.303.303a1 1 0 001.414-1.414l-2-2a1 1 0 00-1.414 0l-2 2a1 1 0 001.414 1.414l.278-.278A6.003 6.003 0 0111 17.917V9h3V7h-3V5.83zM11 3a1 1 0 11-2 0 1 1 0 012 0z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)