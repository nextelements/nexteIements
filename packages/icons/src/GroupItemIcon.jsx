import React from 'react'

export const GroupItemIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M15.757.703a1 1 0 00-1.414 0l-3.536 3.535a1 1 0 000 1.415l3.536 3.535a1 1 0 001.414 0l3.536-3.535a1 1 0 000-1.415L15.757.703z","M1 1.996a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1v-6zm2 5v-4h4v4H3zM2 10.996a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1H2zm1 2v4h4v-4H3zM11 11.996a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6zm2 5v-4h4v4h-4z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)