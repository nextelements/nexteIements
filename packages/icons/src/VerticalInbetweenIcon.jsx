import React from 'react'

export const VerticalInbetweenIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M0 0h20v1a1 1 0 01-1 1H1a1 1 0 01-1-1V0zm6.293 11.293a.999.999 0 000 1.412l2.962 2.963.038.04A.996.996 0 0010 16a.996.996 0 00.745-.332l2.962-2.963a.999.999 0 00-1.412-1.412L10 13.587l-2.295-2.294a.999.999 0 00-1.412 0zm0-3.998a.999.999 0 101.412 1.412L10 6.413l2.295 2.294a.999.999 0 101.412-1.412l-2.962-2.963A.996.996 0 0010 4a.996.996 0 00-.745.332L6.293 7.295zM20 19v1H0v-1a1 1 0 011-1h18a1 1 0 011 1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)