import React from 'react'

export const RemoveColumnIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M19 0H5c-.55 0-1 .45-1 1v4h2V2h5v16H6v-3H4v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-1 18h-5V2h5v16zM6.29 13.71a1.003 1.003 0 001.42-1.42L5.41 10 7.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L4 8.59l-2.29-2.3A1.003 1.003 0 00.29 7.71L2.59 10 .3 12.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L4 11.41l2.29 2.3z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)