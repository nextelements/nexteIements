import React from 'react';

export const GreaterThanIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M12.838 10l-9.154 3.051a1 1 0 00.632 1.898l12-4c.912-.304.912-1.594 0-1.898l-12-4a1 1 0 00-.632 1.898L12.838 10z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);