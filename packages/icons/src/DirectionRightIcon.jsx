import React from 'react'

export const DirectionRightIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M20 10.02l-20-7 5 7-5 7z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)