import React from 'react';

export const PanelIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M11 17h6V3h-6v14zM1 20h18c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v18c0 .55.45 1 1 1zM2 2h16v16H2V2z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);