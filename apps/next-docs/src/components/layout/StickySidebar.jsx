'use client'

import { useState, useEffect, useRef } from 'react';

export const StickySidebar = ({ children }) => {
  const [ isScrolledTop, setIsScrolledTop ] = useState(false);
  const [ isScrolledBottom, setIsScrolledBottom ] = useState(false);
  const [ headerHeight, setHeaderHeight ] = useState('0px');

  const scrollbarWidth = useScrollbarWidth();
  const sidebarRef = useRef(null);

  useEffect(() => {

    const header = document.querySelector('[aria-label="header"]')
    const height = header?.getBoundingClientRect().height
    
    if(height) {
      setHeaderHeight(`${height}px`)
    }

    const handleScroll = () => {
      if (!sidebarRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = sidebarRef.current;
      setIsScrolledTop(scrollTop > 0);
      setIsScrolledBottom(scrollTop + clientHeight < scrollHeight);
    };

    const sidebar = sidebarRef.current;
    sidebar.addEventListener('scroll', handleScroll);

    return () => {
      sidebar.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sticky scrollbar`} style={{ top: headerHeight }}>
      <div
        className={`absolute top-0 bg-gradient-to-b from-background via-background/50 to-transparent h-[50px] pointer-events-none ${isScrolledTop ? 'opacity-100' : 'opacity-0'}`}
        style={{ width: `calc(100% - ${scrollbarWidth}px)` }}
      />
      <div
        ref={sidebarRef}
        className="p-[1em] h-[calc(100vh_-_60px)] overflow-y-auto"
        style={{ height: `calc(100vh - ${headerHeight})` }}
      >
        { children }
      </div>
      <div
        className={`absolute bottom-0 bg-gradient-to-t from-background via-background/50 to-transparent h-[50px] pointer-events-none ${isScrolledBottom ? 'opacity-100' : 'opacity-0'}`}
        style={{ width: `calc(100% - ${scrollbarWidth}px)` }}
      />
    </div>
  )
}

const useScrollbarWidth = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  const getScrollbarWidth = () => {
    const div = document.createElement('div');
    div.style.cssText = 'visibility:hidden;width:100px;height:100px;overflow:scroll';
    document.body.appendChild(div);
    const width = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return width;
  };

  useEffect(() => {
    // Setze die initiale Scrollbar-Breite
    setScrollbarWidth(getScrollbarWidth());

    const handleResize = () => {
      setScrollbarWidth(getScrollbarWidth());
    };

    // Event Listener für 'resize' (inkl. Zoom)
    window.addEventListener('resize', handleResize);

    // Cleanup-Eventlistener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return scrollbarWidth;
};