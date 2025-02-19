import React from 'react'

export const HighVoltagePoleIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M7 0a1 1 0 00-1 1v3H4V2a1 1 0 000-2H1a1 1 0 100 2h1v2H1a1 1 0 000 2h1v2H1a1 1 0 100 2h3a1 1 0 000-2V6h2v13a1 1 0 001.928.374L10 14.54l2.073 4.836A1 1 0 0014 19V6h2v2a1 1 0 100 2h3a1 1 0 100-2h-1V6h1a1 1 0 100-2h-1V2h1a1 1 0 100-2h-3a1 1 0 100 2v2h-2V1a1 1 0 00-1-1H7zm1 2v2h4V2H8zm4 12.128L11.088 12 12 9.872v4.256zM8.516 6L10 9.462 11.483 6H8.516zm.396 6L8 9.872v4.256L8.912 12z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)