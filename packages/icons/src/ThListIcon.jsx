import React from 'react'

export const ThListIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M19 1H1c-.6 0-1 .5-1 1v16c0 .5.4 1 1 1h18c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1zm-1 16H2v-3h16v3zm0-4H2v-3h16v3zm0-4H2V6h16v3z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)