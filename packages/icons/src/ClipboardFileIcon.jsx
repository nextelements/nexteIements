import React from 'react'

export const ClipboardFileIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M7 9a1 1 0 011-1h6.586a1 1 0 01.707.293l1.414 1.414a1 1 0 01.293.707V19a1 1 0 01-1 1H8a1 1 0 01-1-1V9zm2.5 2a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 3a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 3a.5.5 0 000 1h5a.5.5 0 000-1h-5z","M12 1.943c0-.534-.45-.972-1-.972h-.78A1.99 1.99 0 008.5 0c-.74 0-1.38.389-1.72.971H6c-.55 0-1 .438-1 .972V3h7V1.943z","M13 4H4.04V2H3a1 1 0 00-1 1v14a1 1 0 001 1h3V8a1 1 0 011-1h8V3a1 1 0 00-1-1h-1v2z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)