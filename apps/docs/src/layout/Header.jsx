'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Wrapper } from './Wrapper';
import { cx } from '@nextelements/utilities';
import { UnresolveIcon } from '@nextelements/icons';
import Link from 'next/link';

const Header = ({ items }) => {
  const pathname = usePathname()
  const [ active, setActive ] = useState(pathname);

  return (
    <header>
      <Wrapper>
        <div className="flex items-center gap-1">
          <UnresolveIcon className="inline-block" />
          <p className="text-[110%] font-semibold"></p>
          {/* resolve.ui */}
        </div>
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
