import React from 'react'

export const VolumeDownIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M15.92 3.93l-1.6 1.18A7.948 7.948 0 0116 10c0 1.84-.63 3.54-1.68 4.89l1.6 1.18A9.878 9.878 0 0018 10c0-2.29-.78-4.39-2.08-6.07zM11 3c-.28 0-.53.11-.71.29L7.59 6H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)