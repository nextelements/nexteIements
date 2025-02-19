import React from 'react'

export const SubscriptIcon = ({ className = '', size = 20, fill = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    {["M.224 6.63a1 1 0 111.563-1.248L5 9.4l3.213-4.017A1 1 0 119.776 6.63L6.28 11l3.495 4.369a1 1 0 11-1.563 1.248L5 12.601l-3.213 4.016A1 1 0 11.224 15.37L3.72 11 .224 6.63zm15.8 11.33c.16-.19.34-.38.56-.55.21-.18.449-.36.709-.53.25-.18.5-.36.749-.56.25-.2.49-.41.73-.63.229-.22.439-.47.629-.74.18-.27.33-.56.44-.88.11-.32.159-.67.159-1.07 0-.32-.05-.65-.14-1-.09-.35-.25-.68-.47-.97-.22-.3-.509-.55-.869-.74-.36-.2-.809-.29-1.348-.29-.49 0-.93.1-1.299.29-.37.18-.69.44-.949.78-.26.33-.45.73-.58 1.2-.13.46-.2.96-.2 1.5h1.43c.01-.35.04-.67.09-.97.05-.3.14-.56.25-.78.109-.22.259-.39.449-.52s.43-.19.709-.19c.31 0 .56.06.75.18.189.12.339.26.449.43.11.17.18.36.22.56.04.2.06.39.06.57-.01.38-.1.72-.26 1.02-.15.3-.37.57-.63.83-.26.25-.54.49-.849.71-.31.22-.61.45-.889.68-.6.45-1.059.98-1.409 1.58-.35.61-.519 1.32-.529 2.13h5.984v-1.43h-4.276c.06-.21.17-.42.33-.61z"].map((d, i) => (
      <path key={i} d={d} fill={fill} />
    ))}
  </svg>
)