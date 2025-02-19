import React from 'react'

export const ThVirtualAddIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M15 1a1 1 0 112 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0V5h-2a1 1 0 110-2h2V1z","M1 1h12a3 3 0 00-2.236 5H2v11h15V9.83A3.002 3.002 0 0019 7v11a1 1 0 01-1 1H1a1 1 0 01-1-1V2c0-.5.4-1 1-1z","M3 8a1 1 0 011-1h5a1 1 0 010 2H6.414l5.293 5.293a1 1 0 11-1.414 1.414L5 10.414V13a1 1 0 01-2 0V8z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)