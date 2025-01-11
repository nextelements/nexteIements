'use client'

import { useEffect, useState } from 'react'

export const useSticky = (ref) => {
  const [ stickyTop, setStickyTop ] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    const calculateStickyTop = () => {
      const element = ref.current
      const initialPosition = element.getBoundingClientRect().top // Position relativ zum Viewport
      const scrollY = window.scrollY // Aktuelle Scroll-Position
      setStickyTop(initialPosition + scrollY) // Absoluter Top-Wert
    }

    // Initiale Berechnung
    calculateStickyTop()

    // Optional: Berechnung bei Fenster-Resize
    //window.addEventListener('resize', calculateStickyTop)

    return () => {
      window.removeEventListener('resize', calculateStickyTop)
    }
  }, [ref])

  const stickyStyle = { 
    position: 'sticky',
    alignSelf: 'flex-start',
    top: `${stickyTop}px`,
  }

  return { stickyTop, stickyStyle }
}

/*
import React, { useRef } from 'react'
import { useStickyPosition } from './hooks/useStickyPosition'

export default function Sidebar() {
  const sidebarRef = useRef(null) // Referenz auf das Sidebar-Element
  const { stickyTop, stickyStyle } = useStickyPosition(sidebarRef) // Hook verwenden

  return (
    <div
      ref={sidebarRef}
      style={stickyStyle}
    >
      <p>Inhalt der Sidebar</p>
    </div>
  )

*/