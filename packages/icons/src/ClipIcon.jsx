import React from 'react'

export const ClipIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M0 1a1 1 0 011-1h5a1 1 0 010 2H2v4a1 1 0 01-2 0V1zm1 19a1 1 0 01-1-1v-5a1 1 0 112 0v4h4a1 1 0 110 2H1zm18 0a1 1 0 001-1v-5a1 1 0 10-2 0v4h-4a1 1 0 100 2h5zm0-20a1 1 0 011 1v5a1 1 0 11-2 0V2h-4a1 1 0 110-2h5zm-9 14a4 4 0 100-8 4 4 0 000 8z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)