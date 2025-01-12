import React from 'react'

export const StadiumGeometryIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M15 7H5a3 3 0 000 6h10a3 3 0 100-6zM5 5a5 5 0 000 10h10a5 5 0 000-10H5z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)