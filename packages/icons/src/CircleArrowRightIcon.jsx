import React from 'react'

export const CircleArrowRightIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M15.71 9.29l-4-4a1.003 1.003 0 00-1.42 1.42L12.59 9H5c-.55 0-1 .45-1 1s.45 1 1 1h7.59l-2.29 2.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71zM10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)