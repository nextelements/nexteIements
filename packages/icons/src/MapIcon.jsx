import React from 'react'

export const MapIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M19.54 4.18l.01-.02-6-4-.01.02C13.39.08 13.21 0 13 0s-.39.08-.54.18l-.01-.02L7 3.8 1.55.17l-.01.01A.969.969 0 001 0C.45 0 0 .45 0 1v14c0 .35.19.64.46.82l-.01.02 6 4 .01-.02c.15.1.33.18.54.18s.39-.08.54-.18l.01.02L13 16.2l5.45 3.63.01-.02c.15.11.33.19.54.19.55 0 1-.45 1-1V5c0-.35-.19-.64-.46-.82zM6 17.13l-4-2.67V2.87l4 2.67v11.59zm6-2.67l-4 2.67V5.54l4-2.67v11.59zm6 2.67l-4-2.67V2.87l4 2.67v11.59z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)