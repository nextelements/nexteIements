import React from 'react'

export const ConfirmIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M9.71 5.29a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l7-7a1.003 1.003 0 00-1.42-1.42L12 7.59l-2.29-2.3zm7.93 2.32c.23.75.36 1.56.36 2.39 0 4.42-3.58 8-8 8s-8-3.58-8-8a7.998 7.998 0 0111.8-7.04l1.46-1.46C13.73.56 11.93 0 10 0 4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10c0-1.4-.29-2.73-.81-3.95l-1.55 1.56z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)