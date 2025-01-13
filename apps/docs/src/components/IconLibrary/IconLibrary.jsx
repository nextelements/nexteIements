import { iconMap } from '@nextelements/icons/icon.map'
import { PrintIcon } from './PrintIcon'

import { cx } from '@nextelements/utilities'

export const IconLibrary = () => {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-[auto] gap-[1em]">
          {iconMap.map(({ name, svg }, index) => (
            <div key={index} className={cx(
              'grid grid-rows-2 grid-cols-1 gap-2 p-2 cursor-pointer items-center justify-center text-center rounded-md',
              'transition-[.2s] hover:bg-default-100 border border-default-100'
              )}>
              <div className="flex justify-center pt-5">
                <PrintIcon size={26} d={svg} />
              </div>
              <div className="text-xs">{name}</div>
            </div>
          ))}
      </div>
    </>
  )
}