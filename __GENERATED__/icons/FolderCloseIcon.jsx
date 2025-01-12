import React from 'react';

export const FolderCloseIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M0 17c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7H0v10zM19 4H9.41l-1.7-1.71A.997.997 0 007 2H1c-.55 0-1 .45-1 1v3h20V5c0-.55-.45-1-1-1z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);