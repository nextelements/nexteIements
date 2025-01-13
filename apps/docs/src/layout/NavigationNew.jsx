'use client'

import { ThemeToggle } from '@nextelements/themes'
import { useEffect, useRef, useState } from 'react';
import { useSticky, useScroll } from '@nextelements/hooks';
import { capitalize } from '@/utils/functions';
import { usePathname } from 'next/navigation';
import { cx } from '@nextelements/utilities';
import Link from 'next/link';

export const NavigationNew = () => {

  const pathname = usePathname();
  const path = pathname.split('/').filter(Boolean)[0];

  const [ content, setContent ] = useState(null);
  const [ isActive, setActive ] = useState(pathname)

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

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch('/api/nav');
      if (!response.ok) {
        throw new Error('Fehler beim Laden der Navigationsdaten');
      }
      const data = await response.json();
      setContent(data)
      console.log(data)
    };
    fetchContent();
  }, []);

  useEffect(() => {
    setActive(pathname)
  }, [ pathname ])

  return content && (
    <div>
      {Object.entries(content).map(([ category, subcategories ]) => path == category && (
        <div key={category}>
          <h2>{category}</h2>
          {Object.entries(subcategories).map(([subcategory, files]) => (
            <div key={subcategory}>
              <h3>{subcategory}</h3>
              <ul>
                {files.map((file) => (
                  <li key={file.fileName}>
                    <strong>{file.title}</strong> ({file.fileFullName})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
