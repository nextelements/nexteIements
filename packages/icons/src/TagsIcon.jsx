import React from 'react'

export const TagsIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M3 3a2 2 0 012-2h4.588a2 2 0 011.414.586l7.41 7.41a2 2 0 010 2.828l-4.588 4.588a2 2 0 01-2.829 0l-7.41-7.41A2 2 0 013 7.588V3zm3.489-.006a1.495 1.495 0 100 2.99 1.495 1.495 0 000-2.99z","M2 4.689l-.732 1.258c-.265.457-.337 1-.2 1.51l2.717 10.068a2.005 2.005 0 002.453 1.407l4.785-1.274a2.996 2.996 0 01-.735-.54L2.878 9.71A3 3 0 012 7.588v-2.9z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)