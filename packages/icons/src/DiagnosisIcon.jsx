import React from 'react'

export const DiagnosisIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M4 2a1 1 0 01.117 1.993L4 4v5a2 2 0 001.85 1.995L6 11a2 2 0 001.995-1.85L8 9V4a1 1 0 01-.117-1.993L8 2h1a1 1 0 01.993.883L10 3v6a4.002 4.002 0 01-3 3.874V13a3 3 0 003 3 4 4 0 003.995-3.8L14 12V8.792a2.5 2.5 0 112 0V12a6 6 0 01-6 6 5 5 0 01-4.995-4.783L5 13v-.126A4.002 4.002 0 012.005 9.2L2 9V3a1 1 0 01.883-.993L3 2h1z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)