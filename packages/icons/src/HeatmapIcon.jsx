import React from 'react'

export const HeatmapIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M6 0a6 6 0 100 12A6 6 0 106 0z","M10.5 8a4.5 4.5 0 100 9 4.5 4.5 0 100-9z","M16.5 7a3.5 3.5 0 100 7 3.5 3.5 0 100-7zM18 16a2 2 0 100 4 2 2 0 100-4zM2.5 14a2.5 2.5 0 100 5 2.5 2.5 0 100-5zM16.5 0a2.5 2.5 0 100 5 2.5 2.5 0 100-5z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)