import React from 'react'

export const ChatIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M19 0H7c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.59l3.71 3.71c.17.18.42.29.7.29.55 0 1-.45 1-1v-3h1c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 13c-1.1 0-2-.9-2-2V4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v3a1.003 1.003 0 001.71.71L7.41 16H13c.55 0 1-.45 1-1v-.17L12.17 13H7z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)