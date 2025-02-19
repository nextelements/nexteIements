import React from 'react'

export const RegexIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M0 17.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM14 0a1 1 0 00-1 1v3.768L9.737 2.884a1 1 0 10-1 1.732L12 6.5 8.737 8.384a1 1 0 001 1.732L13 8.232V12a1 1 0 102 0V8.232l3.263 1.884a1 1 0 001-1.732L16 6.5l3.263-1.884a1 1 0 10-1-1.732L15 4.768V1a1 1 0 00-1-1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)