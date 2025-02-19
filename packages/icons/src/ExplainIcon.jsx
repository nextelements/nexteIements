import React from 'react'

export const ExplainIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10h10V10c0-5.523-4.477-10-10-10zM8 11a1 1 0 011 1v4.37a.63.63 0 001.18.307l3.74-6.733A.635.635 0 0013.365 9H12a1 1 0 01-1-1V3.63a.63.63 0 00-1.18-.306l-3.74 6.732a.635.635 0 00.555.944H8z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)