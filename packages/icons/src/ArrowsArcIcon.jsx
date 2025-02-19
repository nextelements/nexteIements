import React from 'react'

export const ArrowsArcIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M4.246.183a.625.625 0 01.883 0l3.978 3.978a.625.625 0 01-.884.883L5.308 2.13v.004c-.01 2.244-.018 3.935.23 5.393.29 1.708.933 3.07 2.403 4.53 1.478 1.471 2.77 2.11 4.432 2.4 1.437.252 3.134.245 5.488.235h.009l-2.914-2.914a.625.625 0 11.883-.884l3.978 3.978a.625.625 0 010 .883l-3.978 3.978a.625.625 0 11-.883-.884l2.906-2.906c-2.333.01-4.157.016-5.704-.255-1.931-.338-3.452-1.106-5.099-2.744C5.404 11.296 4.64 9.7 4.306 7.736c-.266-1.563-.26-3.374-.248-5.597L1.152 5.044a.625.625 0 11-.884-.883L4.246.183z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)