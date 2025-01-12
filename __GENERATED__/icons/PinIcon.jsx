import React from 'react';

export const PinIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M11.77 1.16c-.81.81-.74 2.28.02 3.76L6.1 8.71c-2.17-1.46-4.12-2-4.94-1.18l4.95 4.95-4.95 6.36 6.36-4.95 4.95 4.95c.82-.82.27-2.77-1.19-4.94l3.8-5.69c1.47.76 2.94.84 3.76.02l-7.07-7.07z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);