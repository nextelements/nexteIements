import React from 'react';

export const OneToOneIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M2 10a1 1 0 112 0 1 1 0 01-2 0zm3.83-1a3.001 3.001 0 100 2h8.34a3.001 3.001 0 100-2H5.83zM17 9a1 1 0 100 2 1 1 0 000-2z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);