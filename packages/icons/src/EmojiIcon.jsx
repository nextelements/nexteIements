import React from 'react'

export const EmojiIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 2a8 8 0 100 16 8 8 0 000-16zm-4 8l.015.215C6.219 12.42 7.925 14 10 14a4 4 0 003.995-3.8L14 10h2l-.013.238C15.754 13.552 13.163 16 10 16a6 6 0 01-5.996-5.775L4 10h2zm1.5-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)