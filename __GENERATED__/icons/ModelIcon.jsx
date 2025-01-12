import React from 'react';

export const ModelIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M18.746 17H1.254A1.25 1.25 0 010 15.707c.07-1.927.278-5.273.894-8.196.325-1.544.76-2.947 1.333-3.957C2.815 2.52 3.488 2 4.249 2c.88 0 1.541.357 2.081.92.547.571.961 1.345 1.327 2.151.103.226.21.477.317.726l.003.006c.245.57.482 1.12.706 1.524.338.609.785 1.173 1.471 1.173 1.046 0 1.653-.667 2.147-1.245l.003-.003.135-.157c.283-.32.566-.616.925-.835.35-.213.785-.36 1.383-.36.628 0 1.239.358 1.832 1.042.587.676 1.114 1.623 1.576 2.688.853 1.967 1.458 4.272 1.814 5.848A1.25 1.25 0 0118.746 17z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);