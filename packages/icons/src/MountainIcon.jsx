import React from 'react'

export const MountainIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M20 16H4l7-11h1l2 2h1l5 9zm-4-5l-1.5-3h-1l-1-1-1-1L8 11.5l3-1.5 1 1 1-1 3 1zM8.055 8L2.79 16H0l7-8h1.055z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)