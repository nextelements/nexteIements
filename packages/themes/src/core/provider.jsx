'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({
  children,
  themes = ['light', 'dark'],
  defaultLightTheme = 'light',
  defaultDarkTheme = 'dark',
  initialTheme = 'system',
}) => {

  const [theme, setTheme] = useState(initialTheme)
  const [isMounted, setMounted] = useState(false)

  useEffect(() => {
    const scheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? defaultDarkTheme
      : defaultLightTheme

    const savedTheme = localStorage.getItem('theme') || scheme

    if (themes.includes(savedTheme)) {
      setTheme(savedTheme)
    } else {
      setTheme(scheme)
    }

    setMounted(true)
  }, [ initialTheme ])

  useEffect(() => {
    if (theme === 'system' || theme === null) {
      return
    }
    document.documentElement.classList.remove(localStorage.getItem('theme', theme))
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [ initialTheme ])

  if (!isMounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ themes, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
