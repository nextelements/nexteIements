import React from 'react'

export const CleanIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M7 0L5 5 0 6.998 5 9l2 5 2-5 5-1.995L9 5zM15 10l-1.5 3.496-3.5 1.499 3.5 1.498L15 20l1.5-3.507L20 15l-3.5-1.504z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)