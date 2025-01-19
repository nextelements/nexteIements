'use client'

import { useRef, useLayoutEffect } from 'react'

export const Sidebar = ({ children, component }) => {
  const ref = useRef(null)

  useLayoutEffect(() => {
    let top = document.querySelector('.header').clientHeight
    let element = ref.current
    if(element) {
      element.style.cssText = `
        position: sticky;
        top: calc(${top + 1}px + 1em);
        height: calc(100vh - ${top}px);
      `
    }
  })

  return (
    <>
      <div ref={ref}>
        { component || children }
      </div>
    </>
  )
    
}