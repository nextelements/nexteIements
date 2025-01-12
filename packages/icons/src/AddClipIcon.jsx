import React from 'react'

export const AddClipIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M15 0a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0V6h-3a1 1 0 110-2h3V1a1 1 0 011-1zM1 4a1 1 0 00-1 1v4a1 1 0 002 0V6h3a1 1 0 000-2H1zM0 19a1 1 0 001 1h4a1 1 0 100-2H2v-3a1 1 0 10-2 0v4zm15 1h-4a1 1 0 110-2h3v-3a1 1 0 112 0v4a1 1 0 01-1 1zm-7-5a3 3 0 100-6 3 3 0 000 6z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)