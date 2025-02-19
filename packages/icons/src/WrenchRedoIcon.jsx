import React from 'react'

export const WrenchRedoIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M4 9C2.34 9 1 7.66 1 6s1.34-3 3-3h1.59l-.3-.29a1.003 1.003 0 011.42-1.42l2 2c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2 2a1.003 1.003 0 01-1.42-1.42l.3-.29H4c-.55 0-1 .45-1 1s.45 1 1 1a1 1 0 110 2zm9.5 7c-.821 0-1.6-.18-2.3-.503l-2.944 2.944a1.907 1.907 0 01-2.697-2.697L8.503 12.8a5.5 5.5 0 017.68-7.103l-3.744 3.742a1.5 1.5 0 102.122 2.122l3.742-3.743A5.5 5.5 0 0113.5 16z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)