import React from 'react'

export const LayerOutlineIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M9.514 4.126l-9 5a1 1 0 000 1.748l9 5a1 1 0 00.972 0l9-5a1 1 0 000-1.748l-9-5a1 1 0 00-.972 0zM10 6.144l6.94 3.855L10 13.855 3.059 9.999 10 6.144z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)