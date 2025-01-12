import React from 'react'

export const SymbolDiamondIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M15 10.01c0-.21-.08-.39-.18-.54l.02-.01-4-6-.02.01c-.18-.28-.47-.46-.82-.46s-.64.18-.82.45l-.01-.01-4 6 .02.01c-.11.16-.19.34-.19.55s.08.39.18.54l-.02.01 4 6 .02-.01c.18.27.47.46.82.46s.64-.19.82-.46l.02.01 4-6-.02-.01c.1-.16.18-.34.18-.54z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)