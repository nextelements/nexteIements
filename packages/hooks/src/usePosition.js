import { useState, useEffect } from "react";

export const useFloatingPosition = ({ triggerRef, floatingRef, offset = 8, defaultPosition = "bottom" }) => {
  const [position, setPosition] = useState(defaultPosition);

  useEffect(() => {
    const adjustPosition = () => {
      if (!triggerRef.current || !floatingRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const floatingRect = floatingRef.current.getBoundingClientRect();

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const spaceTop = triggerRect.top - offset;
      const spaceBottom = viewportHeight - (triggerRect.bottom + offset);
      const spaceLeft = triggerRect.left - offset;
      const spaceRight = viewportWidth - (triggerRect.right + offset);

      if (spaceBottom >= floatingRect.height) {
        setPosition("bottom");
      } else if (spaceTop >= floatingRect.height) {
        setPosition("top");
      } else if (spaceRight >= floatingRect.width) {
        setPosition("right");
      } else if (spaceLeft >= floatingRect.width) {
        setPosition("left");
      } else {
        setPosition(defaultPosition);
      }
    };

    adjustPosition();
    window.addEventListener("resize", adjustPosition);
    window.addEventListener("scroll", adjustPosition);

    return () => {
      window.removeEventListener("resize", adjustPosition);
      window.removeEventListener("scroll", adjustPosition);
    };
  }, [triggerRef, floatingRef, offset, defaultPosition]);

  return position;
};