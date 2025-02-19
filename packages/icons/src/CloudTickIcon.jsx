import React from 'react'

export const CloudTickIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M14.784 4.022a2.214 2.214 0 01-.144.018C13.83 1.69 11.62 0 9 0 5.69 0 3 2.69 3 6c0 .025.002.048.005.07a.615.615 0 01.005.07A3.98 3.98 0 000 10c0 2.21 1.79 4 4 4h1.17a3 3 0 014.95-1.121l.88.878 4.879-4.878a3 3 0 014.115-.12A5.002 5.002 0 0015 4c-.072 0-.144.01-.216.022z","M11.707 18.707a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L11 16.586l6.293-6.293a1 1 0 011.414 1.414l-7 7z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)