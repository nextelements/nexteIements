import React from 'react'

export const WrenchIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M19.8 4.44L16.13 8.1l-3.55-.71-.71-3.53L15.54.21c-2.01-.53-4.23-.03-5.8 1.53-1.86 1.85-2.23 4.6-1.14 6.83L.59 16.59C.22 16.95 0 17.45 0 18a2 2 0 002 2c.55 0 1.05-.22 1.41-.59l8.03-8.04c2.23 1.05 4.97.67 6.82-1.16 1.57-1.56 2.07-3.77 1.54-5.77z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)