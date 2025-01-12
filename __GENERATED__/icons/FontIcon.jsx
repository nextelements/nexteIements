import React from 'react';

export const FontIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M10.933 2.641a1 1 0 00-1.866 0L4.075 15.62a1 1 0 101.867.717L7.225 13h5.55l1.283 3.337a1 1 0 101.867-.717L10.933 2.64zM12.005 11L10 5.786 7.994 11h4.011z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);