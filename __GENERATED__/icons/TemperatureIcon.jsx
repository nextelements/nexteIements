import React from 'react';

export const TemperatureIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M11 0a2 2 0 00-2 2v10.535a4 4 0 104 0V2a2 2 0 00-2-2zM3 2.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zM3.5 8a.5.5 0 000 1h4a.5.5 0 000-1h-4zM5 5.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm.5 5.5a.5.5 0 000 1h2a.5.5 0 000-1h-2z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);