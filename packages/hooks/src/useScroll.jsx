'use client'

import { useEffect, useState } from 'react'

export function useScroll() {
  const [ scrollPosition, setScrollPosition ] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollPosition
}

/*
  const scrollY = useScroll()
  console.log(scrollY) // Gibt die aktuelle Scrollposition zurück
*/