import React from 'react'

export const FilterSortDescIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M20 2c0-.55-.45-1-1-1H6a1.003 1.003 0 00-.71 1.71L10 7.41V16a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71V7.41l4.71-4.71c.18-.17.29-.42.29-.7zM4.71 19.71c-.18.18-.43.29-.71.29-.28 0-.53-.11-.71-.29l-3-3a1.003 1.003 0 011.42-1.42L3 16.59V11c0-.55.45-1 1-1s1 .45 1 1v5.59l1.29-1.29c.18-.19.43-.3.71-.3a1.003 1.003 0 01.71 1.71l-3 3z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)