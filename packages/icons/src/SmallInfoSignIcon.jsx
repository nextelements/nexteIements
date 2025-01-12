import React from 'react'

export const SmallInfoSignIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M17 10a7 7 0 11-14 0 7 7 0 0114 0zm-6-5v2H9V5h2zm0 3v6h1v1H8v-1h1V9H8V8h3z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)