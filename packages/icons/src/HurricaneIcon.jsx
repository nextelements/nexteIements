import React from 'react'

export const HurricaneIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M0 14c1.648.775 3 1 4 1-1-1-2-3.112-2-5a5.098 5.098 0 000-.045C2 5.17 6.201 1 11.172 1c3.206 0 6.9.667 8.828 5-1.648-.775-3-1-4-1 1 1 2 3.112 2 5v.045C18 14.83 13.799 19 8.828 19c-3.206 0-6.9-.667-8.828-5zm10-7a3 3 0 100 6 3 3 0 000-6z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)