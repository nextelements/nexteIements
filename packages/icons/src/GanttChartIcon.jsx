import React from 'react'

export const GanttChartIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M4 7h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm3 2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1zm12 3h-6c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm0 4H2V3c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)