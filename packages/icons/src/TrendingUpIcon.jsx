import React from 'react'

export const TrendingUpIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M19 4h-4c-.55 0-1 .45-1 1s.45 1 1 1h1.77l-5.91 6.65L7.6 10.2l-.01.01C7.42 10.09 7.23 10 7 10c-.21 0-.39.08-.54.18l-.01-.02-6 4 .01.02c-.27.18-.46.47-.46.82 0 .55.45 1 1 1 .21 0 .39-.08.54-.18l.01.02 5.41-3.61 3.43 2.58.01-.01c.18.11.37.2.6.2.3 0 .56-.14.74-.34l.01.01L18 7.63V9c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)