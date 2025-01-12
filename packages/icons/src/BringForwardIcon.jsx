import React from 'react'

export const BringForwardIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M9.293.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 3.414V9h8a1 1 0 110 2h-8v3h8a1 1 0 011 1v3a1 1 0 01-1 1H1a1 1 0 01-1-1v-3a1 1 0 011-1h8v-3H1a1 1 0 110-2h8V3.414L6.707 5.707a1 1 0 01-1.414-1.414l4-4z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)