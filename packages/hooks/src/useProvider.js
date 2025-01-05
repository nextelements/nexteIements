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





/*
import React, { useRef } from "react";
import { useFloatingPosition } from "./useFloatingPosition";

const MultiFloatingExample = () => {
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const popover1Ref = useRef(null);
  const popover2Ref = useRef(null);

  const position1 = useFloatingPosition({
    triggerRef: button1Ref,
    floatingRef: popover1Ref,
    offset: 10,
    defaultPosition: "bottom",
  });

  const position2 = useFloatingPosition({
    triggerRef: button2Ref,
    floatingRef: popover2Ref,
    offset: 10,
    defaultPosition: "top",
  });

  const getStyles = (position) => ({
    position: "absolute",
    ...(position === "bottom" && { top: "100%", left: "0" }),
    ...(position === "top" && { bottom: "100%", left: "0" }),
    ...(position === "left" && { right: "100%", top: "0" }),
    ...(position === "right" && { left: "100%", top: "0" }),
  });

  return (
    <div>
      <div style={{ position: "relative", marginBottom: "50px" }}>
        <button ref={button1Ref}>Button 1</button>
        <div ref={popover1Ref} style={getStyles(position1)}>
          Popover 1
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <button ref={button2Ref}>Button 2</button>
        <div ref={popover2Ref} style={getStyles(position2)}>
          Popover 2
        </div>
      </div>
    </div>
  );
};

export default MultiFloatingExample;
*/

