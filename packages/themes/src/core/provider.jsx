'use client'

import { createContext, useContext, useState, useEffect, useLayoutEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within MyContextProvider");
  }
  return context;
}

export const ThemeProvider = ({
  children,
  themes = ['light', 'dark'],
  defaultLightTheme = 'light',
  defaultDarkTheme = 'dark',
  initialTheme = 'system',
}) => {

  const [ theme, setTheme ] = useState(initialTheme)
  const [ isClient, setClient ] = useState(false)

  useLayoutEffect(() => {
    const scheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? defaultDarkTheme
      : defaultLightTheme

    const savedTheme = localStorage.getItem('theme') || scheme

    if (themes.includes(savedTheme)) {
      setTheme(savedTheme)
    } else {
      setTheme(scheme)
    }

    setClient(true)
  }, [ initialTheme ])

  useEffect(() => {
    if (theme === 'system' || theme === null) {
      return
    }
    document.documentElement.classList.remove(...themes)
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [ initialTheme, theme ])

  return (
    <ThemeContext.Provider value={{ themes, theme, setTheme }}>
      {isClient && children}
    </ThemeContext.Provider>
  )
}
