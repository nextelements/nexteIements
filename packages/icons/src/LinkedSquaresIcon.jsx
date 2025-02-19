import React from 'react'

export const LinkedSquaresIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M1.1 1A1.1 1.1 0 000 2.1v10.8A1.1 1.1 0 001.1 14H3a1 1 0 100-2H2V3h11v9H9a1 1 0 100 2h4.9a1.1 1.1 0 001.1-1.1V2.1A1.1 1.1 0 0013.9 1H1.1z","M6.1 19A1.1 1.1 0 015 17.9V7.1A1.1 1.1 0 016.1 6H11a1 1 0 110 2H7v9h11V8h-1a1 1 0 110-2h1.9A1.1 1.1 0 0120 7.1v10.8a1.1 1.1 0 01-1.1 1.1H6.1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)