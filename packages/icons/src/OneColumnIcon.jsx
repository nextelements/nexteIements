import React from 'react'

export const OneColumnIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M14.94 0h-4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-8 6c-.28 0-.53.11-.71.29l-3 3c-.18.18-.29.43-.29.71s.11.53.29.71l3 3A1.003 1.003 0 007.94 13V7c0-.55-.45-1-1-1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)