import React from 'react'

export const HelicopterIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M10 3v2H1V3.5a.5.5 0 00-1 0v5a.5.5 0 001 0V7l5 2c0 1.54.824 3.575 3 4.835V16H5.5a.5.5 0 100 1H16.5a.5.5 0 00.224-.053l2-1a.5.5 0 10-.448-.894L16.382 16H15v-1.1A5.002 5.002 0 0014 5h-1V3h6.5a.5.5 0 000-1h-16a.5.5 0 000 1H10zm4 13v-1c-1.608 0-2.928-.258-4-.683V16h4zm0-6V6a4 4 0 014 4h-4z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)