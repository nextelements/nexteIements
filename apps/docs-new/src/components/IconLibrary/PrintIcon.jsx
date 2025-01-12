import React from 'react'

export const PrintIcon = ({ className = '', size = 18, fill = 'currentColor', d = '' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d={d} fill={fill} shapeRendering="geometricPrecision" />
  </svg>
)