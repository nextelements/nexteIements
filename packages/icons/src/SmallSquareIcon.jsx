import React from 'react'

export const SmallSquareIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M5 5v10h10V5H5zM4 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H4z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)