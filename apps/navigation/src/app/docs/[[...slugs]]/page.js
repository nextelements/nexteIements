
import { createStructure, slugmap } from '@/lib/structure'

import { twMerge } from 'tailwind-merge'
import { notFound } from 'next/navigation'
import { getDocument } from '@/lib/markdown'

import {  
  Navigation,
  StickyScrollSidebar,
  TableContents
} from '@/components/layout'

export default async function ({ params }) {

  const wrapper = 'm-[0_auto] w-[90vw]'

  const { slugs } = await params

  const items = createStructure()

  const computedSlug = slugs.join('/')
  const path = slugmap.get(computedSlug)

  const result = await getDocument(path)

  if(!result) notFound()

  const { matter, toc, content, lastModified } = result

  /*
    const computedSlug = slugs.slice(1).join('/') // remove docs/
    console.log(computedSlug, slugMap.get(computedSlug))
  */

  return (
    <div className="grid grid-rows-[60px_1fr_auto] w-screen h-full">
      <div aria-label="header" className="sticky top-0 bg-background/90 backdrop-blur-md w-screen border-b border-b-neutral-900" style={{ zIndex: 1 }}>
        <div className={twMerge('p-[1em]', wrapper)}>
          Header
        </div>
      </div>
      <div aria-label="content" className="content">
        <div className={twMerge('grid grid-cols-[320px_1fr_320px]', wrapper)}>
          <div aria-label="navigation">
            <StickyScrollSidebar>
              <Navigation items={items} />
            </StickyScrollSidebar>
          </div>
          <div aria-label="content">
            <div className="p-[1em]">
              <div>
              { content }
              </div>
              <div className="text-xs text-neutral-500 py-5">
                Last update: -
              </div>
            </div>
          </div>
          <div aria-label="sidebar">
            <StickyScrollSidebar>
              <TableContents tocs={toc} />
            </StickyScrollSidebar>
          </div>
        </div>
      </div>
      <div aria-label="footer" className="footer bg-neutral-900/30 border-t border-t-neutral-900 text-neutral-500">
        <div className={twMerge('p-[1em]', wrapper)}>
          Footer
        </div>
      </div>
    </div>
  )
}