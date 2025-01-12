import React from 'react';

export const EqualsIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M4 7h12a1 1 0 010 2H4a1 1 0 110-2zm0 4h12a1 1 0 010 2H4a1 1 0 010-2z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);