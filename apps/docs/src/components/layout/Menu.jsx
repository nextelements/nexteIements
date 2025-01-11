import { useRef } from 'react'
import { useScroll, useSticky } from '@nextelements/hooks'
import { menuItems } from '@/data/menu'
import { useRouter } from 'next/navigation'
import { cx } from '@nextelements/utilities'
import Link from 'next/link'

const ActiveLink = ({ href, title, ...props }) => {
  const { pathname } = useRouter()

  return (
    <li key={props.key}>
      <Link 
        href={href} 
        className={pathname == href ? 'active' : null}
      >
      { title }
      </Link>
    </li>
  )
}

export const Menu = ({ children }) => {
  const stickyRef = useRef(null)
  const scrollRef = useRef(null)

  const { stickyStyle } = useSticky(stickyRef)
  const { scrollTop, isAtBottom } = useScroll(scrollRef)
  
  const isTop = scrollTop === 0 ? '' : 'shadow-top' 
  const isBottom = !isAtBottom ? 'shadow-bottom' : ''

  console.log(scrollTop > 0)

  return (
    <div className="menu" ref={stickyRef} style={stickyStyle}>
      <div className={`${isTop}`} />
      <div className={`${isBottom}`} />
      <div className="scroll" ref={scrollRef}>
      {menuItems.map(({ title, items }, i) => {
        return (
          <div className="item" key={i}>
            <div className="title">{title}</div>
            <div className="links">
              {items.map(({ title, href }, i) => {
                return <ActiveLink key={i} href={href} title={title} />
              })}
            </div>
          </div>
        )
      })}
      </div>
    </div>
  );
}