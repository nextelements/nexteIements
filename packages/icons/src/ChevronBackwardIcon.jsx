import React from 'react'

export const ChevronBackwardIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M8.41 10l5.29-5.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L7 8.59V4c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55.45 1 1 1s1-.45 1-1v-4.59l5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L8.41 10z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)