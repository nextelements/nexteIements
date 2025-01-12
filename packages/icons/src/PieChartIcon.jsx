import React from 'react'

export const PieChartIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M9 .98c-4.5.5-8 4.31-8 8.94 0 4.97 4.03 9.04 9 9.04 4.63 0 8.44-3.96 8.94-7.96H9V.98z","M10-.08V10h10C20 4 15.52-.08 10-.08z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)