import React from 'react'

export const AsteriskIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M18.52 14.17l.01-.02L11.89 10l6.64-4.15-.01-.02A.97.97 0 0019 5c0-.55-.45-1-1-1-.2 0-.37.07-.52.17l-.01-.02L11 8.2V1c0-.55-.45-1-1-1S9 .45 9 1v7.2L2.53 4.15l-.01.02A.922.922 0 002 4c-.55 0-1 .45-1 1 0 .36.2.66.48.83l-.01.02L8.11 10l-6.64 4.15.01.02A.97.97 0 001 15c0 .55.45 1 1 1 .2 0 .37-.07.52-.17l.01.02L9 11.8V19c0 .55.45 1 1 1s1-.45 1-1v-7.2l6.47 4.04.01-.02c.15.11.32.18.52.18.55 0 1-.45 1-1 0-.36-.2-.66-.48-.83z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)