import React from 'react';

export const SmallMinusIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M14 9H6c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);