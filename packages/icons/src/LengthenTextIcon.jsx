import React from 'react'

export const LengthenTextIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M.833 16h8.334c.458 0 .833-.45.833-1s-.375-1-.833-1H.833C.375 14 0 14.45 0 15s.375 1 .833 1zM1 11h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm15 2c0 .28.11.53.29.71l.3.29H13c-.55 0-1 .45-1 1s.45 1 1 1h3.59l-.29.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l2-2c.18-.19.29-.44.29-.71 0-.28-.11-.53-.29-.71l-2-2A.997.997 0 0017 12a.99.99 0 00-1 1zM1 6h18c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)