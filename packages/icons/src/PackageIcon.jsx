import React from 'react'

export const PackageIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M11.849.306l7.045 3.523A2 2 0 0120 5.618v8.705a2 2 0 01-1.257 1.857l-8.955 3.582a2 2 0 01-1.637-.068L1.106 16.17A2 2 0 010 14.38V5.678A2 2 0 011.257 3.82L10.212.238a2 2 0 011.637.068zM10 9.677v7.846l8-3.2V6.477l-3 1.2v5.159l-2 .793V8.477l-3 1.2z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)