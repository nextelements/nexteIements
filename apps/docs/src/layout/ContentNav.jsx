'use client';

import { usePathname } from 'next/navigation'

/*
const Component = ({ type }) => {
  const pathname = usePathname()
  return (
    navItems.map(({ items }) => {
      return items?.map(({ href }, i) => {
        if(href == pathname) {
          let item = type == 'forward' ? items[i + 1] : items[i - 1]
          return item && (
            <Button key={type} onClick={() => push(item?.href)}>
              <small>{type == 'forward' ? 'Next' : 'Previous'}</small>
              {item?.title}
            </Button>
          )
        }
      })
    })
  )
}
*/

export const ContentNav = ({ items }) => {
  const pathname = usePathname()
  const parts = pathname.split('/')

  const path = parts[1]
  const page = parts[2]

  //console.log(page, path)

  return (
    <>
      <nav className="content-nav">
        <div className="previous-page">
          Prev<br />
        </div>
        <div className="w-full"></div>
        <div className="next-page">
          Next
        </div>
      </nav>
    </>
  )
}