import React from 'react'

export const TickCircleIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M10 20C4.48 20 0 15.52 0 10S4.48 0 10 0s10 4.48 10 10-4.48 10-10 10zm5-14c-.28 0-.53.11-.71.29L8 12.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29.28 0 .53-.11.71-.29l7-7A1.003 1.003 0 0015 6z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)