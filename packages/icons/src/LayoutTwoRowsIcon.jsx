import React from 'react'

export const LayoutTwoRowsIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M0 1a1 1 0 011-1h18a1 1 0 011 1v7a1 1 0 01-1 1H1a1 1 0 01-1-1V1zM0 12a1 1 0 011-1h18a1 1 0 011 1v7a1 1 0 01-1 1H1a1 1 0 01-1-1v-7z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)