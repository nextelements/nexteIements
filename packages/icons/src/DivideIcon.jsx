import React from 'react'

export const DivideIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M11.25 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM6 9c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H6zm4 6a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)