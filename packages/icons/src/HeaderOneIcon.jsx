import React from 'react'

export const HeaderOneIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M2 11v5a1 1 0 11-2 0V3a1 1 0 012 0v6h7V3a1 1 0 112 0v13a1 1 0 11-2 0v-5H2zm15.74-1c-.05.31-.17.57-.34.77-.17.21-.38.39-.64.51-.25.13-.52.23-.83.29-.3.05-.61.08-.93.08v1.24h2.5V20H19V10h-1.26z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)