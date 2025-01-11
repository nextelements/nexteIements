'use client'

import { useEffect, useRef } from "react"
import { useSticky, useScroll } from "@nextelements/hooks"
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { capitalize } from '@/utils/functions';

const Navigation = ({ items }) => {

  const pathname = usePathname();
  const parts = pathname.split('/').filter(Boolean);

  const category = parts[0];
  const slug = parts[1];

  console.log(category, slug)

  const stickyRef = useRef(null)
  const scrollRef = useRef(null)

  const { stickyStyle } = useSticky(stickyRef)
  const { isAtBottom } = useScroll(scrollRef)

  const setScrollHeight = () => {
    const header = document.querySelector('.header').clientHeight
    const footer = document.querySelector('.footer').clientHeight
    const h = window.innerHeight - (footer + header)
    scrollRef.current.style.maxHeight = `calc(${h}px - (1px - 2em))`
  }

  useEffect(() => {
    window.addEventListener('resize', setScrollHeight);
    setScrollHeight()
    return () => {
      window.removeEventListener('resize', setScrollHeight);
    }
  })

  const newItems = items.filter((item) => item.category === category)

  return (
    <div className={`navigation ${!isAtBottom ? ' nav-shadow' : ''}`} ref={stickyRef} style={stickyStyle}>
      <div className="scroll" ref={scrollRef}>
        <div className="title">{ capitalize(category) }</div>
        <div className="items">
          {newItems.map((item, i) => {
          return (
            <li key={i}>
              <span className="indicator"></span>
              <Link href={`../${item.category}/${item.fileName.toLowerCase()}`}>{item.linkname}</Link>
            </li>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export { Navigation }