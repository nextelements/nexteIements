'use client'

import { useState, useEffect } from 'react'

const useDarkmode = () => {
  const [ isDarkMode, setIsDarkMode ] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme')

      if (storedTheme) {
        return storedTheme === 'dark'
      }
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
    document.body.setAttribute('data-theme', theme)
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return [ isDarkMode, toggleDarkMode ]
}

export { useDarkmode }