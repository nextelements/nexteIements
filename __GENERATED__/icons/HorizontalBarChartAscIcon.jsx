import React from 'react';

export const HorizontalBarChartAscIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M1 9h11c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm0-5h9c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zm18 12H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zM1 14h14c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);