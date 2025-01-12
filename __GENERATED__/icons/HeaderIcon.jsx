import React from 'react';

export const HeaderIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M6 11v5a1 1 0 11-2 0V3a1 1 0 012 0v6h8V3a1 1 0 112 0v13a1 1 0 11-2 0v-5H6z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);