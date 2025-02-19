import React from 'react'

export const ManuallyEnteredDataIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M1 12h4.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm16.77-3.94l1.65-1.65c.36-.36.58-.86.58-1.41 0-1.1-.9-2-2-2-.55 0-1.05.22-1.41.59l-1.65 1.65 2.83 2.82zM1 4h12.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zM0 15c0 .55.45 1 1 1h.34l2-2H1c-.55 0-1 .45-1 1zm1-7h8.34l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1zm18 2h-.34l-2 2H19c.55 0 1-.45 1-1s-.45-1-1-1zm0 4h-4.34l-2 2H19c.55 0 1-.45 1-1s-.45-1-1-1zM4 19l4.41-1.59-2.81-2.79L4 19zM14.23 5.94l-7.65 7.65 2.83 2.83 7.65-7.65-2.83-2.83z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)