'use client'

import { useEffect, useRef } from 'react'

export function useRipple() {
  const containerRef = useRef(null)

  useEffect(() => {
    let id = 'ripple-keyframes'

    if (!document.getElementById(id)) {
      const style = document.createElement('style')
  
      style.id = id
      style.textContent = `
        @keyframes 
        ripple-animation {
          from {
            transform: scale(0);
            opacity: 1;
          } to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `

      document.head.appendChild(style)
    }
  }, [])

  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    container.style.position = 'relative'
    container.style.overflow = 'hidden'

    const createRipple = (event) => {
      const rect = container.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = event.clientX - rect.left - size / 2
      const y = event.clientY - rect.top - size / 2

      const ripple = document.createElement('span')
      ripple.style.position = 'absolute'
      ripple.style.width = ripple.style.height = `${size}px`
      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`
      ripple.style.background = 'rgba(0, 0, 0, .2)'
      ripple.style.borderRadius = '50%'
      ripple.style.transform = 'scale(0)'
      ripple.style.animation = 'ripple-animation 600ms ease-out'
      ripple.style.pointerEvents = 'none'

      container.appendChild(ripple)

      ripple.addEventListener('animationend', () => {
        ripple.remove()
      })
    }

    container.addEventListener('click', createRipple)

    return () => {
      container.removeEventListener('click', createRipple)
    }
  }, [])

  return containerRef
}

/*
  import React from "react";
  import { useRipple } from "./hooks/useRipple";

  export default function RippleButton({ children }) {
    const rippleRef = useRipple();

    return (
      <button
        ref={rippleRef}
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "10px 20px",
          border: "none",
          background: "#6200ea",
          color: "#fff",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {children}
      </button>
    )
  }
*/