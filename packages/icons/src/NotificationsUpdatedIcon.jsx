import React from 'react'

export const NotificationsUpdatedIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M10 20c1.1 0 2-.9 2-2H8c0 1.1.9 2 2 2zm2-17.834A2.994 2.994 0 008 4.99c0 .808.319 1.557.876 2.114l2.97 2.99a2.99 2.99 0 004.154.072V14c0 .55.45 1 1 1s1 .45 1 1-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1 1-.45 1-1V8c0-2.61 1.67-4.81 4-5.63V2c0-1.1.9-2 2-2s2 .9 2 2v.166zm1.26 6.514l-2.97-2.99a.973.973 0 01-.29-.7c0-.55.44-1 .99-1 .27 0 .52.11.7.29l2.28 2.28 4.27-4.27a.99.99 0 01.7-.29c.55 0 1 .45 1 1 0 .28-.11.53-.3.7l-4.98 4.98a.99.99 0 01-1.4 0z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)