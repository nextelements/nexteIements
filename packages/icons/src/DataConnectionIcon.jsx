import React from 'react'

export const DataConnectionIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M2 11.9c.935.674 2.339 1.217 4.023 1.536A6.996 6.996 0 009.393 20c-3.988-.019-7.231-1.083-7.387-2.4L2 17.5v-5.6zM13 8c3.315 0 6 2.685 6 6s-2.685 6-6 6-6-2.685-6-6 2.685-6 6-6zm1 1l-4 6h2.5l-.5 4 4-6h-2.5l.5-4zm3-4.6v3.855a7.003 7.003 0 00-10.779 3.992c-2.408-.391-4.097-1.202-4.214-2.142L2 10V4.4c1.525 1.1 4.3 1.85 7.5 1.85S15.475 5.5 17 4.4zM9.5 0C13.637 0 17 1.125 17 2.5S13.637 5 9.5 5C5.35 5 2 3.875 2 2.5S5.35 0 9.5 0z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)