import React from 'react'

export const VectorIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M11.286 1.7a.996.996 0 01-.29-.71c0-.55.45-1 1-.99.28 0 .531.11.711.29l3.003 3a1.013 1.013 0 010 1.419l-3.003 2.999a1.003 1.003 0 01-1.712-.71c0-.28.12-.53.3-.71l1.292-1.29H5.001C4.45 4.999 4 4.549 4 4c0-.55.45-1 1-1h7.587l-1.301-1.3zM5.553 10.105a1 1 0 011.341.448L10 16.763l3.106-6.21a1 1 0 011.789.894l-4 8a1 1 0 01-1.79 0l-4-8a1 1 0 01.448-1.341z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)