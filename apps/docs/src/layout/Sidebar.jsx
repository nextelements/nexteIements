'use client'

import { useEffect, useRef, useState } from 'react';
import { useSticky, useScroll } from '@nextelements/hooks';
import { TableOfContents } from '@/components/TableOfContents';

export const Sidebar = () => {

  const stickyRef = useRef(null);
  const scrollRef = useRef(null);
  const { stickyStyle } = useSticky(stickyRef)

  const updateScrollHeight = () => {
    const headerHeight = document.querySelector('.header')?.clientHeight || 0;
    const changeThemeHeight = document.querySelector('.nav-box')?.offsetHeight || 0;
    
    const availableHeight = window.innerHeight - (headerHeight + changeThemeHeight);

    if (scrollRef.current) {
      scrollRef.current.style.height = `calc(${availableHeight}px - 1px - 3.5em)`;
    }
  };

  useEffect(() => {
    const handleResize = () => updateScrollHeight();

    window.addEventListener('resize', handleResize);
    updateScrollHeight();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav ref={stickyRef} style={stickyStyle}>
      <div ref={scrollRef} className="scroll">
        <TableOfContents />
      </div>
    </nav>
  )
};
