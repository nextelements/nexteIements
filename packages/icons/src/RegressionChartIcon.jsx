import React from 'react'

export const RegressionChartIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M19 16H3.1L19.31 3.39l-.61-.79L2 15.59V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm-9-9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-5 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm10-2c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-5 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)