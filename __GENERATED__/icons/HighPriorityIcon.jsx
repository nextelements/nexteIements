import React from 'react';

export const HighPriorityIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M12 16v4H8v-4h4zm1-16l-1 14H8L7 0h6z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);