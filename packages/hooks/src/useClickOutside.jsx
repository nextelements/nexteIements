'use client'

import { useEffect, useRef } from 'react'

export function useClickOutside(handler) {
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }
  }, [ handler ])

  return ref
}

/*

Beispielverwendung:

    Dropdown-Komponente Beispiel:

    import React, { useState } from "react";
    import { useClickOutside } from "./hooks/useClickOutside";

    export default function Dropdown() {
      const [isOpen, setIsOpen] = useState(false);
      const dropdownRef = useClickOutside(() => setIsOpen(false));

      return (
        <div>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            Toggle Dropdown
          </button>
          {isOpen && (
            <div ref={dropdownRef} style={{ border: "1px solid #ccc", padding: "10px" }}>
              <p>Dropdown Content</p>
            </div>
          )}
        </div>
      );
    }

    Modal-Komponente Beispiel:

    import React, { useState } from "react";
    import { useClickOutside } from "./hooks/useClickOutside";

    export default function Modal() {
      const [isOpen, setIsOpen] = useState(false);
      const modalRef = useClickOutside(() => setIsOpen(false));

      return (
        <div>
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
          {isOpen && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <div
                ref={modalRef}
                style={{
                  margin: "100px auto",
                  padding: "20px",
                  background: "#fff",
                  width: "300px",
                }}
              >
                <p>Modal Content</p>
                <button onClick={() => setIsOpen(false)}>Close</button>
              </div>
            </div>
          )}
        </div>
      );
    }

*/