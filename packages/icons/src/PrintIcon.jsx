import React from 'react'

export const PrintIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M14 16H6v-4H4v5c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-5h-2v4zm2-13c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v1h12V3zm3 2H1c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h2v-3h14v3h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 4h-2V7h2v2z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)