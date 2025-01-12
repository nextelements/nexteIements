import React from 'react'

export const SendBackwardIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M10.707 19.707a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 16.586V11H1a1 1 0 110-2h8V6H1a1 1 0 01-1-1V2a1 1 0 011-1h18a1 1 0 011 1v3a1 1 0 01-1 1h-8v3h8a1 1 0 110 2h-8v5.586l2.293-2.293a1 1 0 011.414 1.414l-4 4z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)