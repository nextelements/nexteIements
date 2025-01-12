import React from 'react';

export const AddLocationIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M10 0a1 1 0 010 2 8 8 0 108 8 1 1 0 012 0c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 6a4 4 0 110 8 4 4 0 010-8zm6-6c.6 0 1 .4 1 1v2h2c.6 0 1 .4 1 1s-.4 1-1 1h-2v2c0 .6-.4 1-1 1s-1-.4-1-1V5h-2c-.6 0-1-.4-1-1 0-.5.4-1 1-1h2V1c0-.6.4-1 1-1z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);