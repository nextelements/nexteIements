import React from 'react'

export const FlowsIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M17.5 7.93a2.5 2.5 0 00-2.45 2h-2.3l-4.01-4-.75.75 3.26 3.25h-6.3a2.5 2.5 0 100 1h6.3l-3.26 3.25.75.75 4.01-4h2.3a2.5 2.5 0 102.45-3z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)