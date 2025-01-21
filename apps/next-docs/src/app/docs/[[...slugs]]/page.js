import { createStructure, fileMappings } from '@/lib/structure'

import { twMerge } from 'tailwind-merge'
import { notFound } from 'next/navigation'
import { getDocument } from '@/lib/markdown'

import {  
  Navigation,
  StickySidebar,
  TableContents
} from '@/components/layout'

import packageJson from '../../../../package.json';
import { IconButton } from '@/components/button'
import { Search } from '@/components/layout/Search'

export default async function ({ params }) {

  const wrapper = 'm-[0_auto] w-[1580px]'

  const { slugs } = await params

  const items = createStructure()

  const slug = slugs.join('/')
  const path = fileMappings.get(slug)
  const source = await getDocument(path)

  if(!source) {
    notFound()
  }

  const {
    lastModified,
    content,
    matter,
    tocs
  } = source

  const version = `v${packageJson.version}-${process.env.NODE_ENV.slice(0, 3)}`

  return (
    <div className="grid grid-rows-[auto_1fr_auto] w-screen h-full">
      <div aria-label="header" className="sticky top-0 bg-background/90 backdrop-blur-md w-screen border-b border-b-neutral-900" style={{ zIndex: 1 }}>
        <div className={twMerge('p-[.5em_1em] flex flex-row flex-nowrap items-center', wrapper)}>
          <div className="font-semibold">nexdocs</div>
          <div className="w-full"></div>
          <div className="flex flex-row flex-nowrap items-center gap-[1em]">
            <Search />
            <IconButton>
              <i className="fa-brands fa-github text-xl" />
            </IconButton>
          </div>
        </div>
      </div>
      <div aria-label="content" className="content">
        <div className={twMerge('grid grid-cols-[320px_1fr_320px]', wrapper)}>
          <div aria-label="navigation">
            <StickySidebar>
              <Navigation items={items} />
            </StickySidebar>
          </div>
          <div aria-label="content">
            <div className="p-[1em]">
              <div>
                { content }
              </div>
              <div className="text-xs text-neutral-500 py-5">
                Last update: { 
                  new Date(lastModified).toLocaleDateString('us-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }) + ' ' + 
                  new Date(lastModified).toLocaleTimeString('de-DE')
                }
              </div>
            </div>
          </div>
          <div aria-label="sidebar">
            <StickySidebar>
              <TableContents tocs={tocs} />
            </StickySidebar>
          </div>
        </div>
      </div>
      <div aria-label="footer" className="footer bg-neutral-900/30 border-t border-t-neutral-900 text-neutral-500">
        <div className={twMerge('p-[1em] flex flex-row flex-nowrap w-full', wrapper)}>
          <div className="w-full"><b>nexdocs</b> created by langheinrich.dev</div>
          <div className="text-nowrap">
            <code>{version}</code>
          </div>
        </div>
      </div>
    </div>
  )
}