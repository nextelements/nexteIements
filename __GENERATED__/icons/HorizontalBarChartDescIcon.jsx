import React from 'react';

export const HorizontalBarChartDescIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M10 16H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm2-5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h11c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1zm3-5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm4-5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);