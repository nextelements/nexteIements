import React from 'react';

export const ThAddIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M15 1a1 1 0 012 0v2h2a1 1 0 010 2h-2v2a1 1 0 01-2 0V5h-2a1 1 0 010-2h2V1z","M19 7v11a1 1 0 01-1 1H1a1 1 0 01-1-1V2c0-.5.4-1 1-1h12a3 3 0 00-2.236 5H8v3h5.764a2.993 2.993 0 003.314.8l.09-.036A3 3 0 0019 7zm-3 3H8v3h9v-3h-1zM7 9V6H2v3h5zm-5 1v3h5v-3H2zm0 4v3h5v-3H2zm15 0H8v3h9v-3z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);