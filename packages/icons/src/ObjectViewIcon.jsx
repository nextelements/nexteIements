import React from 'react'

export const ObjectViewIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M5 0H1a1 1 0 00-1 1v4h2V2h3V0zM18 15v3h-3v2h4a1 1 0 001-1v-4h-2zM0 15h2v3h3v2H1a1 1 0 01-1-1v-4zM15 0h4a1 1 0 011 1v4h-2V2h-3V0zM9.55 2.125L3.742 5.252 10 9l6.259-3.748L10.5 2.125a.963.963 0 00-.95 0zM9.5 10L3.106 5.996A.91.91 0 003 6.421V12.7c0 .34.192.655.504.824l5.889 3.426c.035.019.07.035.107.05v-7zM16.894 5.996a.91.91 0 01.106.425V12.7c0 .34-.192.655-.504.824l-5.889 3.426c-.035.019-.07.035-.107.05v-7l6.394-4.004z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)