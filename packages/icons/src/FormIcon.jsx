import React from 'react'

export const FormIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M2 13v4h4v-4H2zm-1-2h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1zm11-7h7c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1zM8 1a1.003 1.003 0 01.71 1.71l-5 6C3.53 8.89 3.28 9 3 9s-.53-.11-.71-.29l-2-2a1.003 1.003 0 011.42-1.42L3 6.59l4.29-5.3C7.47 1.11 7.72 1 8 1zm4 13h7c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)