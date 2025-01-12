import React from 'react';

export const CollapseAllIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M9.29 8.71c.18.18.43.29.71.29s.53-.11.71-.29l6-6a1.003 1.003 0 00-1.42-1.42L10 6.59l-5.29-5.3a1.003 1.003 0 00-1.42 1.42l6 6zm1.42 2.58c-.18-.18-.43-.29-.71-.29s-.53.11-.71.29l-6 6a1.003 1.003 0 001.42 1.42l5.29-5.3 5.29 5.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-6-6z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);