'use client'

import { useState, useEffect } from 'react';

export function useScroll(ref) {
  const [scrollTop, setScrollTop] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;

      setScrollTop(scrollTop);
      setIsAtTop(scrollTop === 0);
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight);
    };

    element.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return { scrollTop, isAtTop, isAtBottom };
}



/*
  const { scrollTop, isAtTop, isAtBottom } = useScroll()
  console.log(scrollTop, isAtTop, isAtBottom) // Gibt die aktuelle Scrollposition zurück
*/