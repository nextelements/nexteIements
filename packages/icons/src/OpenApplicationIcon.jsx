import React from 'react'

export const OpenApplicationIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M4 1h14c.55 0 1 .45 1 1v13c0 .55-.45 1-1 1h-8v-2h7V4H5v6H3V2c0-.55.45-1 1-1zm2.5 5h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5s.22.5.5.5zm0 2h3c.28 0 .5-.22.5-.5S9.78 7 9.5 7h-3c-.28 0-.5.22-.5.5s.22.5.5.5zm5 2h-5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h5c.28 0 .5.22.5.5s-.22.5-.5.5zM7 17c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59L.3 18.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L7 14.41V17z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)