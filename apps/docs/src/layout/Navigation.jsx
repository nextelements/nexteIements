'use client'

import { ThemeToggle } from '@nextelements/themes'
import { useEffect, useRef, useState } from 'react';
import { useSticky, useScroll } from '@nextelements/hooks';
import { capitalize } from '@/utils/functions';
import { usePathname } from 'next/navigation';
import { cx } from '@nextelements/utilities';
import Link from 'next/link';

export const Navigation = ({ items }) => {

  const pathname = usePathname();
  const path = pathname.split('/').filter(Boolean)[0];

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
    setActive(pathname)
  }, [ pathname ])

  return (
    <nav ref={stickyRef} style={stickyStyle}>
      <div ref={scrollRef} className="scroll">
        {Object.entries(items).map(([ category, subcategories ]) => path == category && (
          <div key={category} className="navigation-item">
            <div className="title">{capitalize(category)}</div>
            <div className="items">
              {Object.entries(subcategories).map(([subcategory, files]) => (
                <div key={subcategory}>
                  {
                    subcategory != 'default' && <div className="title">{capitalize(subcategory)}</div>
                  }
                  <div className="items">
                    <ul>
                      {files.map((file) => (
                        <li key={file.fileName}>
                          <Link 
                            href={file.slug.href}
                            onClick={() => setActive(file.slug.href)}
                            className={cx(isActive == file.slug.href && 'active')}
                          >
                            {file.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
};
