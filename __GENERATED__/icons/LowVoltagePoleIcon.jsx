import React from 'react';

export const LowVoltagePoleIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M10 0a1 1 0 00-1 1v2H5V2a1 1 0 00-2 0v1H2a1 1 0 000 2h1v2H2a1 1 0 000 2h4a1 1 0 000-2H5V5h4v14a1 1 0 102 0V5h4v2h-1a1 1 0 100 2h4a1 1 0 100-2h-1V5h1a1 1 0 100-2h-1V2a1 1 0 10-2 0v1h-4V1a1 1 0 00-1-1z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);