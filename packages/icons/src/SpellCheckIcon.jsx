import React from 'react'

export const SpellCheckIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M8.89.56l5 10c.06.13.11.28.11.44 0 .55-.45 1-1 1-.39 0-.72-.23-.89-.55L10.88 9H5.12l-1.23 2.44c-.17.33-.5.56-.89.56-.55 0-1-.45-1-1 0-.16.05-.31.12-.44l2.35-4.73.9-1.81L7.11.56C7.28.23 7.61 0 8 0s.72.23.89.56zM6.12 7L8 3.24 9.88 7H6.12zm11.17 4.29a1.003 1.003 0 011.42 1.42l-7 7c-.18.18-.43.29-.71.29-.28 0-.53-.11-.71-.29l-3-3a1.003 1.003 0 011.42-1.42l2.29 2.3 6.29-6.3z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)