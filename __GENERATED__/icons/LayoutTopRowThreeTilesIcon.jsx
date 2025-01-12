import React from 'react';

export const LayoutTopRowThreeTilesIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M0 12a1 1 0 011-1h18a1 1 0 011 1v7a1 1 0 01-1 1H1a1 1 0 01-1-1v-7zM0 1a1 1 0 011-1h3a1 1 0 011 1v7a1 1 0 01-1 1H1a1 1 0 01-1-1V1zM7 1a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H8a1 1 0 01-1-1V1zM15 1a1 1 0 011-1h3a1 1 0 011 1v7a1 1 0 01-1 1h-3a1 1 0 01-1-1V1z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);