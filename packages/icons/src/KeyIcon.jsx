import React from 'react'

export const KeyIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M14 0c-3.31 0-6 2.69-6 6 0 1.11.32 2.14.85 3.03L.44 17.44a1.498 1.498 0 102.12 2.12l.79-.79.94.94c.18.18.43.29.71.29s.53-.11.71-.29l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71l-.94-.94 3.2-3.2A5.9 5.9 0 0014 12c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)