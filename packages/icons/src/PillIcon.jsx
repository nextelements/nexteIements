import React from 'react'

export const PillIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M5 5h5a1 1 0 011 1v8a1 1 0 01-1 1H5A5 5 0 015 5zm7 .727c0-.401.326-.727.727-.727H15a5 5 0 010 10h-2.273a.727.727 0 01-.727-.727V5.727zM15 13a3 3 0 100-6h-1v6h1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)