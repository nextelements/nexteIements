import React from 'react'

export const PlaybookIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M1.707.293A1 1 0 00.293 1.707L2.086 3.5.293 5.293a1 1 0 001.414 1.414L3.5 4.914l1.793 1.793a1 1 0 001.414-1.414L4.914 3.5l1.793-1.793A1 1 0 005.293.293L3.5 2.086 1.707.293z","M16 20a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4z","M18.29 5.7L16 3.41V8a3 3 0 01-3 3H4a1 1 0 00-1 1v7a1 1 0 11-2 0v-7a3 3 0 013-3h9a1 1 0 001-1V3.41l-2.29 2.3a1.003 1.003 0 01-1.42-1.42l4-4c.18-.18.43-.29.71-.29.28 0 .53.11.71.29l4 4A1.003 1.003 0 0119 6c-.28 0-.53-.11-.71-.3z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)