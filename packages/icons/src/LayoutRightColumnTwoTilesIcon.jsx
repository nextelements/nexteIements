import React from 'react'

export const LayoutRightColumnTwoTilesIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M11 1a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1V1zM11 12a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7zM0 1a1 1 0 011-1h7a1 1 0 011 1v18a1 1 0 01-1 1H1a1 1 0 01-1-1V1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)