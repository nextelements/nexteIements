import React from 'react'

export const LockIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M15.93 9H14V4.99c0-2.21-1.79-4-4-4s-4 1.79-4 4V9H3.93c-.55 0-.93.44-.93.99v8c0 .55.38 1.01.93 1.01h12c.55 0 1.07-.46 1.07-1.01v-8c0-.55-.52-.99-1.07-.99zM8 9V4.99c0-1.1.9-2 2-2s2 .9 2 2V9H8z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)