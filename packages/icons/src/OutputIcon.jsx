import React from 'react'

export const OutputIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M0 10c0 5.51 4.49 10 10 10 1.17 0 2.32-.2 3.42-.6.52-.19.79-.76.6-1.28a.998.998 0 00-1.28-.6c-.88.32-1.8.48-2.74.48-4.41 0-8-3.59-8-8s3.59-8 8-8c.94 0 1.86.16 2.74.48a.998.998 0 001.28-.6.998.998 0 00-.6-1.28C12.32.2 11.17 0 10 0 4.49 0 0 4.49 0 10z","M19.71 9.29l-4-4a1.003 1.003 0 00-1.42 1.42L16.59 9H5a1 1 0 000 2h11.59l-2.29 2.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)