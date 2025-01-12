import React from 'react'

export const MapMarkerIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M10 0C6.13 0 3 2.98 3 6.67 3 10.35 10 20 10 20s7-9.65 7-13.33C17 2.99 13.86 0 10 0zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)