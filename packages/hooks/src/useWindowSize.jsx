'use client'

import { useState, useEffect } from 'react'

export function useWindowSize() {
  const [ windowSize, setWindowSize ] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

/*
  const { width, height } = useWindowSize()
*/