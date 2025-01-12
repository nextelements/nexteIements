import React from 'react';

export const StarIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M10 0l3.1 6.6 6.9 1-5 5.1 1.2 7.3-6.2-3.4L3.8 20 5 12.7 0 7.6l6.9-1z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);