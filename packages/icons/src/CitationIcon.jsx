import React from 'react'

export const CitationIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M4 1C1.79 1 0 2.79 0 5s1.79 4 4 4c.1 0 .2-.01.3-.02C3.82 11.32 2.53 13 1 13c-.55 0-1 .45-1 1s.45 1 1 1c3.87 0 7-4.48 7-10 0-2.21-1.79-4-4-4zM16 1c-2.21 0-4 1.79-4 4s1.79 4 4 4c.1 0 .2-.01.3-.02C15.82 11.32 14.53 13 13 13c-.55 0-1 .45-1 1s.45 1 1 1c3.87 0 7-4.48 7-10 0-2.21-1.79-4-4-4z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)