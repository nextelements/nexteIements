import React from 'react'

export const ColorFillIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M2.188 9h11.984L8 2.828 3.414 7.414C2.811 8.017 2.405 8.48 2.188 9zM8 0L6.586 1.414 2 6c-1 1-2 2.11-2 4 0 2 1 3 2 4l1 1c1 1 2 2 4 2 2.009 0 2.918-.913 3.868-1.867L11 15l4.586-4.586L17 9l-1.414-1.414-6.172-6.172L8 0zm10.5 13.5L17 11l-1.5 2.5c-.318.53-.5 1-.5 1.5 0 1 .5 2 2 2s2-1 2-2c0-.5-.182-.97-.5-1.5zM1 18a1 1 0 100 2h18a1 1 0 100-2H1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)