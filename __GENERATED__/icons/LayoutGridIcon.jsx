import React from 'react';

export const LayoutGridIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M2 0a2 2 0 100 4 2 2 0 100-4zM10 0a2 2 0 100 4 2 2 0 100-4zM18 0a2 2 0 100 4 2 2 0 100-4zM18 8a2 2 0 100 4 2 2 0 100-4zM18 16a2 2 0 100 4 2 2 0 100-4zM10 16a2 2 0 100 4 2 2 0 100-4zM2 16a2 2 0 100 4 2 2 0 100-4zM2 8a2 2 0 100 4 2 2 0 100-4zM10 8a2 2 0 100 4 2 2 0 100-4z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);