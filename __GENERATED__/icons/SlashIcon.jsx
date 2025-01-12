import React from 'react';

export const SlashIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M12 2c-.46 0-.85.32-.97.74L7.04 16.7c-.02.1-.04.2-.04.3 0 .55.45 1 1 1 .46 0 .85-.32.97-.74L12.96 3.3c.02-.1.04-.2.04-.3 0-.55-.45-1-1-1z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);