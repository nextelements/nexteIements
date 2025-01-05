import { useRef } from 'react'
import { useSticky } from '@nextelements/hooks'

export const Menu = ({ children }) => {
  const ref = useRef(null)
  const { stickyStyle } = useSticky(ref)

  return (
    <div className="menu" ref={ref} style={stickyStyle}>
      <div className="wrapper">
        { children }
      </div>
    </div>
  );
}