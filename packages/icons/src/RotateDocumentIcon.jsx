import React from 'react'

export const RotateDocumentIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M8.71 6.29A.997.997 0 008 6H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-8c0-.28-.11-.53-.29-.71l-4-4zM11 18H4V8h3v3c0 .55.45 1 1 1h3v6zm3-16h-1.59l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2C9.11 2.47 9 2.72 9 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42l-.3-.29H14c1.1 0 2 .9 2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-2.21-1.79-4-4-4z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)