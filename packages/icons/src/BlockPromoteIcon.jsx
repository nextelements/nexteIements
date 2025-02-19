import React from 'react'

export const BlockPromoteIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M18 9h-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v5H2c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-5h1c.55 0 1-.45 1-1s-.45-1-1-1zM6.85 13.35a.47.47 0 01-.35.15.47.47 0 01-.35-.15c-.2-.19-.2-.51 0-.7L8.79 10 6.15 7.35c-.2-.19-.2-.51 0-.7.19-.2.51-.2.7 0l3 3c.2.19.2.51 0 .7l-3 3zm7-3l-3 3a.47.47 0 01-.35.15.47.47 0 01-.35-.15c-.2-.19-.2-.51 0-.7L12.79 10l-2.64-2.65c-.2-.19-.2-.51 0-.7.19-.2.51-.2.7 0l3 3c.2.19.2.51 0 .7z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)