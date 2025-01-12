import React from 'react'

export const FuelIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M2.196 2H0v2h2c.317 0 .619.139.825.38l3.493 4.075-1.873 1.248a1 1 0 00-.445.832V18c0 .5.5 1 1 1h14c.5 0 1-.5 1-1V7.1c0-.034-.001-.067-.004-.1H20V3s0-1-1-1h-8c-.5 0-1 .5-1 1v3L8.12 7.254 4.463 3.035A3 3 0 002.196 2zM18 4v2h-6V4h6z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)