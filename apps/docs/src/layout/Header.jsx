'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Wrapper } from './Wrapper';
import { Logo } from './Logo';
import { cx } from '@nextelements/utilities';
import Link from 'next/link';

const Header = ({ items }) => {
  const pathname = usePathname()
  const [ active, setActive ] = useState(pathname);

  return (
    <header>
      <Wrapper>
        <Logo />
        <nav>
          {items.map(({ title, href }) => {
            return (
              <li key={title}>
                <Link 
                  href={href}
                  className={cx(`/${active.split('/')[1]}` == `/${href.split('/')[1]}` && 'active')}
                  onClick={() => setActive(href)}
                >{title}</Link>
              </li>
            )
          })}
        </nav>
      </Wrapper>
    </header>
  );
};

export { Header };
