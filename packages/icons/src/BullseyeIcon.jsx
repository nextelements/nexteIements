import React from 'react'

export const BullseyeIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M19.707.293a1 1 0 010 1.414l-9 9a1 1 0 01-1.414-1.414l9-9a1 1 0 011.414 0z","M14.626 1.132A9.957 9.957 0 0010 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10a9.956 9.956 0 00-1.132-4.626l-1.501 1.502a8 8 0 11-4.243-4.243l1.502-1.501z","M11.554 4.203a6 6 0 104.243 4.243l-1.805 1.804A4 4 0 119.75 6.008l1.804-1.805z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)