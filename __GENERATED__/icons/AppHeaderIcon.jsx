import React from 'react';

export const AppHeaderIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M19 0a1 1 0 011 1v18a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h18zM8 6a1 1 0 00-1.993-.117L6 6v8a1 1 0 001.993.117L8 14v-3h4v3a1 1 0 001.993.117L14 14V6a1 1 0 00-1.993-.117L12 6v3H8V6z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);