import React from 'react'

export const DetectionIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M1 0a1 1 0 00-1 1v5a1 1 0 002 0V2h4a1 1 0 000-2H1zM0 19a1 1 0 001 1h5a1 1 0 100-2H2v-4a1 1 0 10-2 0v5zM19 20a1 1 0 001-1v-5a1 1 0 10-2 0v4h-4a1 1 0 100 2h5zM20 1a1 1 0 00-1-1h-5a1 1 0 100 2h4v4a1 1 0 102 0V1z","M5 6a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V6zm2 7V7h6v6H7z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)