import React from 'react';

export const OneToManyIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M18 3a1 1 0 11-2 0 1 1 0 012 0zm-3.82 1.028a6.243 6.243 0 00-1.667.347c-.947.352-1.773 1-2.032 2.318C10.158 8.337 9.247 9.368 8.217 10c1.03.632 1.941 1.663 2.264 3.307.259 1.318 1.085 1.966 2.032 2.318.581.217 1.18.308 1.668.347a3.001 3.001 0 11-.019 2.004c-.633-.042-1.491-.158-2.347-.476-1.402-.523-2.868-1.625-3.296-3.807-.259-1.318-1.085-1.966-2.032-2.318a5.314 5.314 0 00-.722-.21 3 3 0 110-2.33c.238-.052.481-.12.722-.21.947-.352 1.773-1 2.032-2.318.428-2.182 1.894-3.284 3.296-3.807.856-.318 1.714-.434 2.347-.476A3.001 3.001 0 0120 3a3 3 0 01-5.82 1.028zM4 10a1 1 0 100 .002v-.002zM17 18a1 1 0 100-2 1 1 0 000 2z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);