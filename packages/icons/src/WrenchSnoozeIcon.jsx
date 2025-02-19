import React from 'react'

export const WrenchSnoozeIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M2 1h4a1 1 0 01.775 1.632L4.08 6H6a1 1 0 010 2H2a1 1 0 01-.771-1.636L3.919 3H2a1 1 0 010-2zm11.5 15c-.821 0-1.6-.18-2.3-.503l-2.944 2.944a1.907 1.907 0 01-2.697-2.697L8.503 12.8a5.5 5.5 0 017.68-7.103l-3.744 3.742a1.5 1.5 0 102.122 2.122l3.742-3.743A5.5 5.5 0 0113.5 16z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)