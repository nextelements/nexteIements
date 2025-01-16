'use client';

import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

export const ContentNav = ({ items }) => {
  const pathname = usePathname()
  const router = useRouter()
  const segments = pathname.split('/').splice(1)
  const category = segments.at(0)
  const SUB = segments.at(1)

  let newItems = items[category]
  if(segments.length == 1) {
    newItems = newItems?.default
  } else if(segments.length > 1) {
    if(!newItems[SUB]) {
      newItems = newItems?.default
    } else {
      newItems = newItems[SUB]
    }
  }
  
  if(!newItems || newItems.length == 1) {
    return null
  }

  return (
    <>
      <nav className="content-nav border-t border-t-divider">
        {(() => {
          const currentIndex = newItems?.findIndex((item) => item.href === pathname);
          const prevItem = currentIndex > 0 ? newItems[currentIndex - 1] : null;
          const nextItem = currentIndex < newItems?.length - 1 ? newItems[currentIndex + 1] : null;

          return (
            <>
            <div className="flex items-center w-full">
              {prevItem && (
                <div className="p-5 hover:cursor-pointer" onClick={(() => router.push(prevItem.href))}>
                  <div className="block text-muted text-xs">Previous</div>
                  <div className="whitespace-nowrap">{prevItem.title}</div>
                </div>
              )}
              <div className="w-full"></div>
              {nextItem && (
                <div className="p-5 text-right hover:cursor-pointer"  onClick={(() => router.push(nextItem.href))}>
                  <div className="block text-muted text-xs">Next</div>
                  <div className="whitespace-nowrap">{nextItem.title}</div>
                </div>
              )}
            </div>
            </>
          );
        })()}
      </nav>
    </>
  )
}