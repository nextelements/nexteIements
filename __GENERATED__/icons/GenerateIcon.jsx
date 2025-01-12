import React from 'react';

export const GenerateIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M8 13a1 1 0 00-1-1H4.942a.942.942 0 01-.81-1.422L10.11.49A1.02 1.02 0 0111 0a1 1 0 011 1v6a1 1 0 001 1h2.058a.942.942 0 01.81 1.422L9.89 19.51A1.02 1.02 0 019 20a1 1 0 01-1-1v-6z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);