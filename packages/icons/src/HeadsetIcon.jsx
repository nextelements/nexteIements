import React from 'react'

export const HeadsetIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M18.97 9H19A9 9 0 001 9h.03C.41 9.73 0 10.8 0 12c0 1.74.84 3.2 2 3.76V16c0 1.66 1.34 3 3 3h3c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1H5c-.55 0-1-.45-1-1 .55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-.92C3.57 4.61 6.47 2 10 2s6.43 2.61 6.92 6H16c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1c1.66 0 3-1.79 3-4 0-1.2-.41-2.27-1.03-3z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)