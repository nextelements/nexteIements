import React from 'react'

export const GridViewIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M0 19c0 .55.45 1 1 1h8v-9H0v8zM0 1v8h9V0H1C.45 0 0 .45 0 1zm19-1h-8v9h9V1c0-.55-.45-1-1-1zm-8 20h8c.55 0 1-.45 1-1v-8h-9v9z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)