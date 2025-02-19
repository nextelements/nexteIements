import React from 'react'

export const WrenchTimeIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M1 4.5C1 2.57 2.57 1 4.5 1S8 2.57 8 4.5 6.43 8 4.5 8 1 6.43 1 4.5zm3-2v2.21l1.56 1.56c.1.09.23.14.36.14.12 0 .25-.05.35-.14.19-.2.19-.51 0-.71L5 4.29V2.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5zM13.5 16c-.821 0-1.6-.18-2.3-.503l-2.944 2.944a1.907 1.907 0 01-2.697-2.697L8.503 12.8a5.5 5.5 0 017.68-7.103l-3.744 3.742a1.5 1.5 0 102.122 2.122l3.742-3.743A5.5 5.5 0 0113.5 16z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)