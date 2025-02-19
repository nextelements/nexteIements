import React from 'react'

export const TargetIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M9 5a1 1 0 012 0v3a1 1 0 01-2 0V5zM12 9a1 1 0 000 2h3a1 1 0 000-2h-3zM4 10a1 1 0 011-1h3a1 1 0 010 2H5a1 1 0 01-1-1zM10 11a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1z","M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)