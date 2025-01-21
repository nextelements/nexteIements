'use client'

import { useLayoutEffect, useState } from 'react'

export const Provider = ({ children }) => {
  const [ isClient, setClient ] = useState(false)

  useLayoutEffect(() => setClient(true))

  return isClient && children
}