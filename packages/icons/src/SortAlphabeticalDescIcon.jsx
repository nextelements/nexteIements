import React from 'react'

export const SortAlphabeticalDescIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M8.01 15c-.28 0-.53.11-.71.29L6 16.59v-5.58c0-.55-.45-1-1-1s-1 .45-1 1v5.58L2.71 15.3c-.18-.18-.43-.3-.71-.3a1.003 1.003 0 00-.71 1.71l3 3a1.014 1.014 0 001.42 0l3-3c.18-.18.29-.43.29-.71.01-.55-.44-1-.99-1zm4.44-5.65l6.4-7.88V0H10.5v1.67h5.91L10 9.44v1.57h9V9.35h-6.55zm1.27 3.64L11 20h1.59l.56-1.56h2.68l.55 1.56h1.64l-2.68-7.01h-1.62zm-.16 4.3l.93-2.57h.02l.9 2.57h-1.85z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)