import React from 'react'

export const RocketIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M7 7.5c0-3 1.857-6.25 3-7.5 1.143 1.25 3 4.5 3 7.5s-.714 6.25-1 7.5H8c-.286-1.25-1-4.5-1-7.5zm6.84 2.5c-.139 1.62-.47 3.405-.84 5.01l4 .99-1-4-2.16-2zm-4.832 6C9 16.139 9 16.284 9 16.429 9 17.143 9 17.5 10 20c1-2.5 1-2.857 1-3.571 0-.145 0-.29-.008-.429H9.008zM7 15.011c-.37-1.605-.701-3.39-.84-5.011L4 12l-1 4 4-.989zM10 5a1 1 0 100 2 1 1 0 000-2z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)