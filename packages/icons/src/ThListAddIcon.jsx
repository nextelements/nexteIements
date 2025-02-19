import React from 'react'

export const ThListAddIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M16 0a1 1 0 00-1 1v2h-2a1 1 0 000 2h2v2a1 1 0 002 0V5h2a1 1 0 000-2h-2V1a1 1 0 00-1-1z","M17.168 9.764A3 3 0 0019 7v11a1 1 0 01-1 1H1a1 1 0 01-1-1V2c0-.5.4-1 1-1h12a3 3 0 00-2.236 5H2v3h11.764c.55.614 1.348 1 2.236 1H2v3h15v-3h-1a2.995 2.995 0 001.168-.236zM2 14v3h15v-3H2z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)