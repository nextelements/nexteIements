import React from 'react'

export const SimCardIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M16.71 5.29l-5-5A.997.997 0 0011 0H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.28-.11-.53-.29-.71zM9 7h2v3H9V7zM6 7h2v3H6V7zm2 11H6v-3h2v3zm3 0H9v-3h2v3zm3 0h-2v-3h2v3zm0-4H6v-3h8v3zm0-4h-2V7h2v3z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)