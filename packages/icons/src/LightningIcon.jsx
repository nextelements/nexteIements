import React from 'react'

export const LightningIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M9 11H6a1 1 0 01-1-1L5.91.9a1 1 0 01.995-.9h6.256a.839.839 0 01.779 1.15L11.2 8h2.978a.822.822 0 01.748 1.162l-4.764 10.481A.608.608 0 019 19.392V11z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)