import React from 'react'

export const StackedChartIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M12 2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v4h4V2zm3 14h2c.55 0 1-.45 1-1v-5h-4v5c0 .55.45 1 1 1zm3-10c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v3h4V6zm-6 1H8v5h4V7zm-9 9h2c.55 0 1-.45 1-1v-3H2v3c0 .55.45 1 1 1zm16 1H1c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM6 9c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2h4V9zm3 7h2c.55 0 1-.45 1-1v-2H8v2c0 .55.45 1 1 1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)