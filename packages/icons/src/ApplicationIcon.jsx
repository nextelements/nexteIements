import React from 'react'

export const ApplicationIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M3.5 9h9c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-9c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5zM19 1H1c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm-1 16H2V6h16v11zM3.5 13h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5s.22.5.5.5z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)