import React from 'react'

export const RotateCwIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M1.707 9.59a.76.76 0 00.038 1.035l4.326 4.326a.76.76 0 01-1.076 1.076L.669 11.701a2.283 2.283 0 01-.114-3.106l3.315-3.84H2.49a.76.76 0 110-1.521h3.043c.42 0 .76.34.76.76v3.044a.76.76 0 11-1.521 0V6.04L1.707 9.59z","M19.116 9.116a1.25 1.25 0 010 1.768l-5.303 5.303a1.25 1.25 0 01-1.768 0l-5.303-5.303a1.25 1.25 0 010-1.768l5.303-5.303a1.25 1.25 0 011.768 0l5.303 5.303z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)