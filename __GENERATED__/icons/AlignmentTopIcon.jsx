import React from 'react';

export const AlignmentTopIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M8 4H4c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm11-4H1C.45 0 0 .45 0 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zm-3 4h-4c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);