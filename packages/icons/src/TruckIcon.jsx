import React from 'react'

export const TruckIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M16 0a1 1 0 011 1v11a1 1 0 011 1v3h.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H17v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H6v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1H1.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H2v-3a1 1 0 011-1V1a1 1 0 112 0v3a2 2 0 012-2h6a2 2 0 012 2V1a1 1 0 011-1zm-4 10H8a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1zm-7 4H4a1 1 0 000 2h1a1 1 0 000-2zm11 0h-1a1 1 0 000 2h1a1 1 0 000-2zm-4.5 0a.5.5 0 110 1h-3l-.09-.008A.5.5 0 018.5 14zm0-1.5a.5.5 0 110 1h-3l-.09-.008a.5.5 0 01.09-.992zm0-1.5a.5.5 0 110 1h-3l-.09-.008A.5.5 0 018.5 11zM14 5H6v3h8V5z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)