import { getDocument } from '@/lib/markdown'
import { settings } from '@/settings/settings'
import { notFound } from 'next/navigation'

import { Sidebar, Menu, TableOfContents } from '@/components/template'

import { getItems } from '@/lib/items'

export default async ({ params }) => {
  const { slug } = await params
  const path = slug.join('/')

  const result = await getDocument(path)
  const items = getItems(path)

  if(!result) {
    notFound()
  }

  const { 
    matter, 
    tableOfContents, 
    content 
  } = result

  return (
    <div className="m-[0_auto] w-[85vw]">
      <div className="grid grid-cols-[300px_1fr_300px] gap-[1em]">
        <div>
          <Sidebar component={<Menu items={items} />} />
        </div>
        <div>
          <h1>{matter?.title}</h1>
          <p>Description: {matter?.description}</p>
          { content }
        </div>
        <div>
          <Sidebar component={<TableOfContents items={tableOfContents} />} />
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }) {
  let { slug = [] } = await params
  const path = slug.join('/')

  const res = await getDocument(path)

  if (!res) return null

  const { 
    matter,
    lastUpdate
  } 
  = res

  if(!matter.title) {
    matter.title = settings?.title || path
  } else {
    matter.title = `${matter?.title} - ${settings?.title}`
  }

  return {
    title: matter.title,
    description: matter.description,
    keywords: matter.keywords,
    ...(lastUpdate && {
      lastModified: new Date(lastUpdate).toISOString(),
    }),
  }
}