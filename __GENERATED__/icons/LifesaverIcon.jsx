import React from 'react';

export const LifesaverIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M8.143 14.644L7.028 17.43c.919.368 1.922.57 2.972.57s2.053-.202 2.972-.57l-1.115-2.786A4.986 4.986 0 0110 15a4.986 4.986 0 01-1.857-.356zm-2.787-2.787A4.986 4.986 0 015 10c0-.656.126-1.283.356-1.857L2.57 7.028A7.978 7.978 0 002 10c0 1.05.202 2.053.57 2.972l2.786-1.115zm2.787-6.5A4.986 4.986 0 0110 5c.656 0 1.283.126 1.857.356l1.115-2.786A7.978 7.978 0 0010 2c-1.05 0-2.053.202-2.972.57l1.115 2.786zm6.5 2.786c.23.574.357 1.2.357 1.857 0 .656-.126 1.283-.356 1.857l2.786 1.115c.368-.919.57-1.922.57-2.972s-.202-2.053-.57-2.972l-2.786 1.115zM10 13a3 3 0 100-6 3 3 0 000 6zm0 7C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);