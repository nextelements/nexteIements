import React from 'react'

export const LessThanOrEqualToIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M16.316 11.051L7.162 8l9.154-3.051a1 1 0 10-.632-1.898l-12 4c-.912.304-.912 1.594 0 1.898l12 4a1 1 0 10.632-1.898zM16 15H4a1 1 0 100 2h12a1 1 0 100-2z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)