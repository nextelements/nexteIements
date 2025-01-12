'use client';

import { useEffect, useRef, useState } from 'react';
import { useSticky, useScroll } from '@nextelements/hooks';
import { capitalize } from '@/utils/functions';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cx } from '@nextelements/utilities';

const Navigation = ({ items }) => {
  const pathname = usePathname();
  const category = pathname.split('/').filter(Boolean)[0];

  const stickyRef = useRef(null);
  const scrollRef = useRef(null);

  const { stickyStyle } = useSticky(stickyRef);
  const { isAtBottom } = useScroll(scrollRef);

  const [ isActive, setActive ] = useState(pathname)

  useEffect(() => {
    setActive(pathname)
  })

  const updateScrollHeight = () => {
    const headerHeight = document.querySelector('.header')?.clientHeight || 0;
    const footerHeight = document.querySelector('.footer')?.clientHeight || 0;
    const availableHeight = window.innerHeight - (headerHeight + footerHeight);
    if (scrollRef.current) {
      scrollRef.current.style.maxHeight = `calc(${availableHeight}px - (1px + 2em))`;
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

  const filteredItems = items[category] || [];

  const exportPath = (s, c) => s.replace('@', `/${category}`)

  const renderItems = () => 
    filteredItems.map((item, index) => (
      <div key={index} className="navigation-item">
        {!item.items ? (
          <li>
            <Link 
              href={exportPath(item.href)}
              className={cx(isActive == exportPath(item.href) && 'active')}
              onClick={() => setActive(exportPath(item.href))}
              >
                {item.title}
            </Link>
          </li>
        ) : (
          <>
            <li className="subtitle">{item.title}</li>
            <ul>{renderSubItems(item.items)}</ul>
          </>
        )}
      </div>
    ))

  const renderSubItems = (items) =>
    items.map((item, index) => (
      <li key={index}>
        <Link 
          href={exportPath(item.href)}
          className={cx(isActive == exportPath(item.href) && 'active')}
          onClick={() => setActive(exportPath(item.href))}
          >
            {item.title}
        </Link>
      </li>
    ));

  return (
    <div
      className={`navigation ${!isAtBottom ? 'nav-shadow' : ''}`}
      ref={stickyRef}
      style={stickyStyle}
    >
      <div className="scroll" ref={scrollRef}>
        <div className="title">{capitalize(category)}</div>
        <div className="items">{renderItems()}</div>
      </div>
    </div>
  );
};

export { Navigation };
