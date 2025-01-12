import React from 'react'

export const SymbolCircleIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M10 4.01a6 6 0 100 12 6 6 0 100-12z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)