'use client'

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

export const Navigation = ({ items, section }) => {
  return items ? (
    <ul>
      {items.map((item, index) => (
        <NavigationItems key={index} item={item} />
      ))}
    </ul>
  ) : <NavigationEmpty section={section} />
};

const NavigationItems = ({ item }) => {
  const [ isOpen, setIsOpen ] = useState(true);
  const pathname = usePathname();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      {item.type === 'folder' && !item.isInvisible && (
        <div className="mb-2">
          <button onClick={toggleAccordion} className={
            twMerge(
              'block mb-2 w-full py-1 text-neutral-300',
              'hover:text-neutral-50 pl-[9px] hover:bg-neutral-900/25 hover:rounded-md',
              'active:bg-neutral-900/50'
            )}>
            <div className="flex flex-row flex-nowrap items-center gap-2 mx-1 mr-3">
              <div>
                {isOpen 
                  ? <i className="fa-regular fa-folder-open"></i> 
                  : <i className="fa-regular fa-folder-closed"></i>
                }
              </div>
              <div className="w-full font-semibold text-left">
                {item.title}
              </div>
              <div className="text-xs text-right">
                {isOpen 
                  ? <i className="fas fa-chevron-up"></i>
                  : <i className="fas fa-chevron-down"></i>
                }
              </div>
            </div>
          </button>
          {isOpen && (
            <ul className="ml-5 pl-2 border-l border-l-zinc-800">
              {item.items && item.items.length > 0 
                ? (
                  <Navigation items={item.items} />
                ) 
                : (
                  <Navigation section={item.title} />
                )
              }
            </ul>
          )}
        </div>
      )}
      {item.type === 'file' && (
        <Link
          href={item.href}
          className={
            twMerge(
              'block text-neutral-500 hover:text-neutral-300 px-4 py-2',
              pathname === item.href && 
                'rounded-md text-neutral-300 bg-neutral-900/75 hover:text-neutral-300 hover:cursor-default' // Vergleiche pathname mit href für aktive Links
            )
          }>
            {item.title}
        </Link>
      )}
    </li>
  );
};

const NavigationEmpty = ({ section }) => {
  return (
    <div className="text-neutral-700 py-4 ml-4">
      { section } empty
    </div>
  )
}