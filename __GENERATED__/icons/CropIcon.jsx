import React from 'react';

export const CropIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M14 19a1 1 0 102 0v-3h3a1 1 0 100-2H6V1a1 1 0 10-2 0v3H1a1 1 0 100 2h3v9a1 1 0 001 1h9v3zm1-15H8v2h6v6h2V5a1 1 0 00-1-1z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);