import React from 'react'

export const AmmunitionIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M6 6v-.172C6 4.018 5.28 2.281 4 1a6.828 6.828 0 00-2 4.828V6h4zM6 18v1H2v-1h4zM6 17V7H2v10h4zM8 19v-1h4v1H8zM12 5.828V6H8v-.172c0-1.81.72-3.547 2-4.828 1.28 1.28 2 3.017 2 4.828zM12 7v10H8V7h4zM14 18v1h4v-1h-4zM18 6v-.172c0-1.81-.72-3.547-2-4.828a6.828 6.828 0 00-2 4.828V6h4zM18 17V7h-4v10h4z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)