import React from 'react'

export const BritishPoundIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M9.62 5.174A3 3 0 009 7v2h4a1 1 0 011 1v1a1 1 0 01-1 1H9v1.377c0 .987-.187 1.867-.534 2.623H17v3H3v-3h.5c.715 0 1.334-.217 1.754-.59.388-.344.746-.944.746-2.033V12H4a1 1 0 01-1-1v-1a1 1 0 011-1h2V7a6 6 0 018.296-5.543C15.516 1.962 16.34 2.857 17 4l-2.402 1.5a3 3 0 00-4.978-.326z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)