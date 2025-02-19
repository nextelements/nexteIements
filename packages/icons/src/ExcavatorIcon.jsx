import React from 'react'

export const ExcavatorIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M19.16 9.804A1 1 0 0018.18 9H16V5a1 1 0 00-1-1h-3.5a1 1 0 00-.8.4L9.76 6 8.139 8.766A1 1 0 008 9.272V12a1 1 0 001 1h9.78a1 1 0 00.98-1.196l-.6-2zM10 9l1.76-3H14v3h-4z","M4.25.5c-.555-.278-1.413.044-1.592.639L0 10c0 1.94.952 2.595 2.501 2.912a.95.95 0 00.857-.27L6 10H2l2-7.006L9 5l.372-.557a.998.998 0 00-.383-1.449L4.25.5z","M3 17a3 3 0 013-3h11a3 3 0 110 6H6a3 3 0 01-3-3zm2 0a1 1 0 011-1h11a1 1 0 110 2H6a1 1 0 01-1-1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)