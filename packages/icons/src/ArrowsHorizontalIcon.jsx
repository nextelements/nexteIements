import React from 'react'

export const ArrowsHorizontalIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M19.7 9.3l-5-5c-.2-.2-.4-.3-.7-.3-.6 0-1 .4-1 1 0 .3.1.5.3.7L16.6 9H3.4l3.3-3.3c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1-.3 0-.5.1-.7.3l-5 5c-.2.2-.3.4-.3.7s.1.5.3.7l5 5c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7L3.4 11h13.2l-3.3 3.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l5-5c.2-.2.3-.4.3-.7s-.1-.5-.3-.7z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)