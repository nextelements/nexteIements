import React from 'react'

export const HexagonIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M7.35 5h5.3l2.77 5-2.77 5h-5.3l-2.77-5 2.77-5zm1.15 5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z","M4.63 1.51c.18-.31.52-.51.89-.51h8.95c.37 0 .71.19.89.51l4.52 8c.17.3.17.67 0 .97l-4.51 8c-.18.31-.52.51-.89.51H5.53c-.37 0-.71-.19-.89-.51l-4.51-8a.986.986 0 010-.97l4.5-8zM6.13 17h7.76l3.95-7-3.95-7H6.13l-3.95 7 3.95 7z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)