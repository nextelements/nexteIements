import React from 'react';

export const WindIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M12 6a3 3 0 113 3H4a1 1 0 000 2h11a5 5 0 10-5-5 1 1 0 102 0zM1 12a1 1 0 100 2h10a2 2 0 110 4c-.934 0-1.803-.614-2.057-1.333a1 1 0 10-1.886.666C7.627 18.944 9.321 20 11 20a4 4 0 000-8H1z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);