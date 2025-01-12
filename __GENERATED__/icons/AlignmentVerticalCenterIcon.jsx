import React from 'react';

export const AlignmentVerticalCenterIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M17 3h-6V1c0-.55-.45-1-1-1S9 .45 9 1v2H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6v2H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-2V9h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);