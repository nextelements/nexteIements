import React from 'react'

export const HatIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M18.5 13c1.118 0 1.466.534 1.498 1.366L20 14.5v.5c0 1.945-5.69 3-10 3S0 16.945 0 15v-.5c0-.908.323-1.5 1.5-1.5.895 0 3.5 1.2 8.5 1.2l.411-.003C15.143 14.134 17.631 13 18.5 13zm-5-10c1.725 0 2.954 2.729 3.688 8.186-1.455.263-3.805.72-6.392.801l-.434.01L10 12c-2.896 0-5.585-.524-7.189-.814C3.546 5.73 4.775 3 6.5 3 8.6 3 8.329 5.5 10 5.5S11.5 3 13.5 3z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)