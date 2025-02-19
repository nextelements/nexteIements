import React from 'react'

export const RotateCcwIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M18.293 9.59a.76.76 0 01-.038 1.035l-4.326 4.326a.76.76 0 101.076 1.076l4.326-4.326c.846-.846.896-2.2.114-3.106l-3.315-3.84h1.38a.76.76 0 100-1.521h-3.043a.76.76 0 00-.76.76v3.044a.76.76 0 001.521 0V6.04l3.065 3.55zM12.866 9.116a1.25 1.25 0 010 1.768l-5.303 5.303a1.25 1.25 0 01-1.768 0L.492 10.884a1.25 1.25 0 010-1.768l5.303-5.303a1.25 1.25 0 011.768 0l5.303 5.303z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)