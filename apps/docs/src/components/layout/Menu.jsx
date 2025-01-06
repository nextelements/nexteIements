import { useRef } from 'react'
import { useScroll, useSticky } from '@nextelements/hooks'
import { menuItems } from '@/data/menu'
import { useRouter } from 'next/navigation'
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
  const { isAtTop, isAtBottom } = useScroll(scrollRef)

  const shadowTop = !isAtTop ? 'shadow-top' : 'shadow-bottom';

  return (
    <div className="menu" ref={stickyRef} style={stickyStyle}>
      <div className={`${shadowTop}`} />
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