import React from 'react'

export const AxleIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M2 15h2v.5a.5.5 0 001 0v-11a.5.5 0 00-1 0V5H2v10zM18 5h-2v-.5a.5.5 0 00-1 0v11a.5.5 0 001 0V15h2V5zM5 8l1.789.894A1 1 0 007.236 9h5.528a1 1 0 00.447-.106L15 8v4l-1.789-.894a.999.999 0 00-.447-.106H7.236a1 1 0 00-.447.106L5 12V8zM0 9h2v2H0V9z","M0 8h1v4H0V8zM19 8h1v4h-1V8z","M20 11h-2V9h2v2zM8 9a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H9a1 1 0 01-1-1V9z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)