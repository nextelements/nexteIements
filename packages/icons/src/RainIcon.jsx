import React from 'react'

export const RainIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M4 10a3 3 0 111.065-5.806A5.001 5.001 0 0114.63 3.11 3.5 3.5 0 1115.5 10H4zm0 2a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm9 1a1 1 0 10-2 0v6a1 1 0 102 0v-6zm3-1a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-7 1a1 1 0 10-2 0v3a1 1 0 102 0v-3z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)