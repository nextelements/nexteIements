import React from 'react'

export const RefreshIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M3.636 3.636A9 9 0 0110 1c2.439 0 5.182.717 7 2.471V2a1 1 0 112 0v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.7c-1.304-1.32-3.483-2-5.7-2a7 7 0 00-7 7 1 1 0 11-2 0 9 9 0 012.636-6.364zM16.364 16.364A9 9 0 0110 19c-2.439 0-5.182-.717-7-2.471V18a1 1 0 11-2 0v-4a1 1 0 011-1h4a1 1 0 110 2H4.3c1.304 1.32 3.483 2 5.7 2a7 7 0 007-7 1 1 0 112 0 9 9 0 01-2.636 6.364z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)