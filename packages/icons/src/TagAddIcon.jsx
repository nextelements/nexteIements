import React from 'react'

export const TagAddIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M15 1a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0V6h-2a1 1 0 110-2h2V2a1 1 0 011-1z","M10.81 3.393A2 2 0 0012 7h1v1a2 2 0 003.607 1.19l.804.805a2 2 0 010 2.829l-4.587 4.588a2 2 0 01-2.829 0l-7.41-7.41A2 2 0 012 8.588V4a2 2 0 012-2h4.588a2 2 0 011.414.586l.807.807zM3.993 5.489a1.495 1.495 0 102.99 0 1.495 1.495 0 00-2.99 0z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)