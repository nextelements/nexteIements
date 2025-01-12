import React from 'react'

export const ThVirtualIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M3 8a1 1 0 011-1h5a1 1 0 010 2H6.414l5.293 5.293a1 1 0 11-1.414 1.414L5 10.414V13a1 1 0 01-2 0V8z","M20 18a1 1 0 01-1 1H1a1 1 0 01-1-1V2c0-.5.4-1 1-1h18a1 1 0 011 1v16zm-2-1V6H2v11h16z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)