import React from 'react'

export const KeyDeleteIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M19.71 9.29l-6-6A.997.997 0 0013 3H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.28 0 .53-.11.71-.29l6-6c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zm-9 3a1.003 1.003 0 01-1.42 1.42L7 11.41 4.71 13.7c-.18.19-.43.3-.71.3a1.003 1.003 0 01-.71-1.71L5.59 10l-2.3-2.29a1.003 1.003 0 011.42-1.42L7 8.59 9.29 6.3c.18-.19.43-.3.71-.3a1.003 1.003 0 01.71 1.71L8.41 10l2.3 2.29z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)