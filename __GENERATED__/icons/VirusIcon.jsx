import React from 'react';

export const VirusIcon = ({ className = '', size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {["M15.249 13.835l1.251 1.251.354-.354.087-.077a1 1 0 011.327 1.491l-2.122 2.122-.087.077a1 1 0 01-1.327-1.491l.354-.354-1.251-1.251A6.466 6.466 0 0111 16.424L10.999 18h.501a1 1 0 01.117 1.993L11.5 20h-3a1 1 0 01-.117-1.993L8.5 18h.499v-1.577a6.46 6.46 0 01-2.538-.97L5.414 16.5l.354.354a1 1 0 01-1.327 1.491l-.087-.077-2.122-2.122a1 1 0 011.327-1.491l.087.077.354.354.97-.97a6.472 6.472 0 01-1.384-3.057l-.025.002L2 11.06v.44a1 1 0 01-1.993.117L0 11.5v-3a1 1 0 011.993-.117L2 8.5v.56h1.567A6.471 6.471 0 014.97 5.883l-.971-.969-.353.354-.087.077a1 1 0 01-1.327-1.491l2.122-2.122.087-.077a1 1 0 011.327 1.491l-.354.353 1.047 1.048A6.46 6.46 0 019 3.577L9 2h-.5A1 1 0 018.383.007L8.5 0h3a1 1 0 01.117 1.993L11.5 2H11v1.577a6.466 6.466 0 012.838 1.176l.04-.046L15.086 3.5l-.353-.353a1 1 0 011.327-1.491l.087.077 2.122 2.122a1 1 0 01-1.327 1.491l-.087-.077-.354-.354-1.207 1.207-.046.041a6.467 6.467 0 011.16 2.733H18V8.5a1 1 0 011.993-.117L20 8.5v3a1 1 0 01-1.993.117L18 11.5v-.605h-1.561a6.466 6.466 0 01-1.19 2.94zM12.5 11a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8 6a2 2 0 100 4 2 2 0 000-4z"].map((d, i) => (
      <path key={i} d={d} fillRule="evenodd" />
    ))}
  </svg>
);