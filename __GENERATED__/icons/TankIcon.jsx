import React from 'react';

export const TankIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M3.956 4.47A1 1 0 014.804 4h6.392a1 1 0 01.848.47L13 6h5a1 1 0 010 2h-5v1h4a3 3 0 110 6H3a3 3 0 010-6V6.287a1 1 0 01.152-.53l.804-1.287zM3 11h14a1 1 0 110 2H3a1 1 0 110-2z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);