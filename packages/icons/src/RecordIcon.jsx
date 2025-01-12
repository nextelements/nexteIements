import React from 'react'

export const RecordIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M10 3a7 7 0 100 14 7 7 0 100-14z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)