import React from 'react'

export const ArrayDateIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M19 0a1 1 0 01.993.883L20 1v18a1 1 0 01-.883.993L19 20h-4a1 1 0 01-.117-1.993L15 18h3V2h-3a1 1 0 01-.993-.883L14 1a1 1 0 01.883-.993L15 0h4zM5 0a1 1 0 01.117 1.993L5 2H2v16h3a1 1 0 01.993.883L6 19a1 1 0 01-.883.993L5 20H1a1 1 0 01-.993-.883L0 19V1A1 1 0 01.883.007L1 0h4zm2.5 5a.5.5 0 01.5.5V6h4v-.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V6h1a1 1 0 01.993.883L16 7v7a1 1 0 01-.883.993L15 15H5a1 1 0 01-.993-.883L4 14V7a1 1 0 01.883-.993L5 6h1v-.5a.5.5 0 01.5-.5h1zM15 9H5v5h10V9z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)