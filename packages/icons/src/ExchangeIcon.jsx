import React from 'react'

export const ExchangeIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M2.5 8a2.5 2.5 0 000 5 2.5 2.5 0 000-5zm10.35 3.15a.495.495 0 10-.7.7L13.3 13H5.5c-.28 0-.5.22-.5.5s.22.5.5.5h7.79l-1.15 1.15c-.08.09-.14.21-.14.35a.495.495 0 00.85.35l2-2c.09-.09.15-.21.15-.35s-.06-.26-.15-.35l-2-2zM17.5 8a2.5 2.5 0 000 5 2.5 2.5 0 000-5zM7.15 9.85a.495.495 0 10.7-.7L6.71 8h7.79c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H6.71l1.15-1.15c.08-.09.14-.21.14-.35a.495.495 0 00-.85-.35l-2 2c-.09.09-.15.21-.15.35s.06.26.15.35l2 2z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)