import React from 'react'

export const ApplicationsIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M15 5H1c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 13H2V8h12v10zM3.5 10h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5zM19 0H5c-.55 0-1 .45-1 1v3h2V3h12v10h-1v2h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)