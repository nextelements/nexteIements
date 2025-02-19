import React from 'react'

export const RectHeightIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M4 18V2h12v16H4zM2 1a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1H3a1 1 0 01-1-1V1zm4.293 11.705a.999.999 0 111.412-1.412L10 13.587l2.295-2.294a.999.999 0 011.412 1.412l-2.962 2.963a1 1 0 01-1.49 0l-2.962-2.963zm0-3.998a.999.999 0 010-1.412l2.962-2.963A1.008 1.008 0 0110 4a.996.996 0 01.745.332l2.962 2.963a.999.999 0 01-1.412 1.412L10 6.413 7.705 8.707a.999.999 0 01-1.412 0z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)