'use client'

import { useLayoutEffect, useState } from 'react';

export default function NotFound() {
  const [ css, setCSS ] = useState('')

  useLayoutEffect(() => {
    const mainElement = document.querySelector('main');
    const navElement = document.querySelector('main nav');
    
    if (mainElement && navElement) {
      navElement.style.display = 'none';
      setCSS(mainElement.style.cssText);
      mainElement.style.cssText = `grid-template-columns: auto;`;
    }
  
    return () => {
      if (mainElement && navElement) {
        navElement.style.display = 'block';
        mainElement.style.cssText = css;
      }
    }
  }, [css]);  // Abhängig vom CSS-Status
  

  return (
    <div>
      Yeah2
    </div>
  )
}