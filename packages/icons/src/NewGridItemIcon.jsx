import React from 'react'

export const NewGridItemIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M8 0H1C.45 0 0 .45 0 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm0 11H1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1zm6 7h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zm5-7h-2c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1zm0-11h-7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-5 11h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1zm5 5c-.55 0-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)