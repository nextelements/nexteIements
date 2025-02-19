import React from 'react'

export const RectWidthIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M18 16H2V4h16v12zM1 18a1 1 0 01-1-1V3a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H1zM7.295 6.293a.999.999 0 111.412 1.412L6.413 10l2.294 2.295a.999.999 0 11-1.412 1.412l-2.963-2.962A.992.992 0 014 10a.996.996 0 01.332-.745l2.963-2.962zm3.998 0a.999.999 0 011.412 0l2.963 2.962.04.038A.996.996 0 0116 10a.996.996 0 01-.332.745l-2.963 2.962a.999.999 0 01-1.412-1.412L13.587 10l-2.294-2.295a.999.999 0 010-1.412z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)