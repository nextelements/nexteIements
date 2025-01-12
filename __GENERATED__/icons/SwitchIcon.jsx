import React from 'react';

export const SwitchIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M12.293 2.293l1.414 1.414-7.127 7.129a3.5 3.5 0 11-1.415-1.415l7.128-7.128zM16.5 9a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm-13 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm13 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);