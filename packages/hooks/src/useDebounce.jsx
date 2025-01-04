'use client'

import { useEffect, useState } from 'react'

export function useDebounce(value, delay = 300) {
  const [ debouncedValue, setDebouncedValue ] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [ value, delay ])

  return debouncedValue
}

/* 
  const searchTerm = useDebounce(inputValue, 500) // Update value after a delay
*/