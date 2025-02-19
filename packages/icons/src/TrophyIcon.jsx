import React from 'react'

export const TrophyIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M5 1a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v2a5 5 0 01-5 5h-.416A5.01 5.01 0 0111 13.9V18h3a1 1 0 110 2H6a1 1 0 110-2h3v-4.1A5.009 5.009 0 015.416 11H5a5 5 0 01-5-5V4a1 1 0 011-1h4V1zm0 4H2v1a3 3 0 003 3V5zm10 4V5h3v1a3 3 0 01-3 3z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)