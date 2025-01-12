import React from 'react';

export const RangeRingIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M10 0c-.442 0-.877.029-1.305.084a1 1 0 00.259 1.984 8.086 8.086 0 012.092 0 1 1 0 00.259-1.984A10.084 10.084 0 0010 0zM5.13 3.652a1 1 0 10-1.218-1.586 10.052 10.052 0 00-1.846 1.846A1 1 0 103.652 5.13 8.054 8.054 0 015.13 3.652zm10.958-1.586a1 1 0 00-1.218 1.586 8.054 8.054 0 011.478 1.478 1 1 0 101.585-1.218 10.053 10.053 0 00-1.845-1.846zM2.068 8.954a1 1 0 10-1.984-.259 10.085 10.085 0 000 2.61 1 1 0 101.984-.259 8.085 8.085 0 010-2.092zm17.848-.259a1 1 0 10-1.984.259 8.086 8.086 0 010 2.092 1 1 0 001.984.259 10.077 10.077 0 000-2.61zM3.652 14.87a1 1 0 00-1.586 1.218 10.053 10.053 0 001.846 1.845 1 1 0 001.218-1.585 8.054 8.054 0 01-1.478-1.478zm14.281 1.218a1 1 0 00-1.585-1.218 8.054 8.054 0 01-1.478 1.478 1 1 0 101.218 1.585 10.054 10.054 0 001.845-1.845zm-8.98 1.844a1 1 0 00-.258 1.984 10.078 10.078 0 002.61 0 1 1 0 10-.259-1.984 8.085 8.085 0 01-2.092 0zM10 7a3 3 0 110 6 3 3 0 010-6zm5 3a5 5 0 10-10 0 5 5 0 0010 0z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);