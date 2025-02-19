import React from 'react'

export const FlowLinearIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M5.125 10.997H.976C.439 10.997 0 10.537 0 10c0-.536.44-.993.976-.993h4.148a4.002 4.002 0 017.752 0h3.776L14.293 6.69a.962.962 0 01-.285-.687c0-.537.46-1.001.996-1.001a.96.96 0 01.698.3l4.005 4.015c.176.176.293.41.293.683a.972.972 0 01-.283.693L15.702 14.7a.997.997 0 01-.698.297c-.537 0-.996-.453-.996-.99 0-.273.107-.517.283-.692l2.371-2.318h-3.787a4.002 4.002 0 01-7.75 0z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)