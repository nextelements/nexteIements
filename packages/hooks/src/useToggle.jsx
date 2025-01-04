'use client'

import { useCallback, useState } from 'react'

export function useToggle(initialValue = false) {
  const [ value, setValue ] = useState(initialValue)

  const toggle = useCallback(() => {
    setValue((prev) => !prev)
  }, [])

  return [ value, toggle ]
}

/*
  const [ isOpen, toggleOpen ] = useToggle()
*/