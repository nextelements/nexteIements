import React from 'react'

export const SavedIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M12 0H4c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V6l-6-6zm4 18H5V2h6v5h5v11zm-8.29-6.71a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29.32 0 .59-.16.77-.38l.01.01 4-5-.01-.01c.14-.18.23-.38.23-.62 0-.55-.45-1-1-1-.32 0-.59.16-.77.38l-.01-.01-3.3 4.13-2.21-2.21z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)