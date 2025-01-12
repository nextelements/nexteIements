import React from 'react';

export const BoxIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M19.89 6.56l-2.99-6h-.01C16.72.23 16.39 0 16 0H4c-.39 0-.72.23-.89.56H3.1l-3 6h.01C.05 6.69 0 6.84 0 7v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7c0-.16-.05-.31-.11-.44zM11 2h4.38l2 4H11V2zM4.62 2H9v4H2.62l2-4zM18 18H2V8h16v10zM8 12h4c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);