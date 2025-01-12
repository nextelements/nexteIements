import React from 'react'

export const HorizontalInbetweenIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M11.293 13.707a.999.999 0 001.412 0l2.963-2.962a1 1 0 000-1.49l-2.963-2.962a.999.999 0 10-1.412 1.412L13.587 10l-2.294 2.295a.999.999 0 000 1.412zM7.295 13.707a.999.999 0 001.412-1.412L6.413 10l2.294-2.295a.999.999 0 10-1.412-1.412L4.332 9.255A.996.996 0 004 10a.996.996 0 00.332.745l2.963 2.962zM0 20V0h1a1 1 0 011 1v18a1 1 0 01-1 1H0zM20 20V0h-1a1 1 0 00-1 1v18a1 1 0 001 1h1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)