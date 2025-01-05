import { useRef } from "react";
import { useSticky } from "@nextelements/hooks";

export const Sidebar = ({ children }) => {
  const ref = useRef(null)
  const { stickyStyle } = useSticky(ref)

  return (
    <div className="sidebar" ref={ref} style={stickyStyle}>
      <div className="wrapper">
        { children }
      </div>
    </div>
  );
}
