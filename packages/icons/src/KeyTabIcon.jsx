import React from 'react'

export const KeyTabIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M19 13H4.41l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L2 12.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1v-2.59l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L4.41 15H19c.55 0 1-.45 1-1s-.45-1-1-1zm0-12c-.55 0-1 .45-1 1v2.59L14.71 1.3A.965.965 0 0014 1a1.003 1.003 0 00-.71 1.71L15.59 5H1c-.55 0-1 .45-1 1s.45 1 1 1h14.59L13.3 9.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L18 7.41V10c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)