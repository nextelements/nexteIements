import React from 'react';

export const MicrophoneIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M10 0a4 4 0 00-4 4v5a4 4 0 008 0V4a4 4 0 00-4-4zM4 7a1 1 0 011 1v1a5 5 0 0010 0V8a1 1 0 112 0v1a7.001 7.001 0 01-6 6.93V18h1a1 1 0 110 2H8a1 1 0 110-2h1v-2.07A7.001 7.001 0 013 9V8a1 1 0 011-1z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);