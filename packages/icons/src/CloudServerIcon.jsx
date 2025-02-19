import React from 'react'

export const CloudServerIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M9 15h11v4H9v-4zm3 2a1 1 0 11-2 0 1 1 0 012 0zm2-1a1 1 0 100 2h4a1 1 0 100-2h-4z","M14.784 5.022C14.856 5.01 14.928 5 15 5a5.004 5.004 0 014.9 4H9a1 1 0 00-1 1v5H4c-2.21 0-4-1.79-4-4a3.98 3.98 0 013.01-3.86c0-.025-.002-.047-.005-.07A.615.615 0 013 7c0-3.31 2.69-6 6-6 2.62 0 4.83 1.69 5.64 4.04.048-.004.096-.011.144-.018z","M9 10h11v4H9v-4zm3 2a1 1 0 11-2 0 1 1 0 012 0zm2-1a1 1 0 100 2h4a1 1 0 100-2h-4z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)