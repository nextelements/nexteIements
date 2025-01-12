import React from 'react';

export const ArrowBottomLeftIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M18 3a1.003 1.003 0 00-1.71-.71L4 14.59V7c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1H5.41l12.3-12.29c.18-.18.29-.43.29-.71z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);