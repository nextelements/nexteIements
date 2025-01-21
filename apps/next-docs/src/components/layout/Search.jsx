import { twMerge } from 'tailwind-merge'

export const Search = () => {

  return (
    <div>
      <div 
        className={twMerge(
          'flex flex-row flex-nowrap items-center gap-[1em]',
          'bg-zinc-900 p-[0.55em_1em] rounded-md text-sm transition outline-none text-nowrap',
          'hover:text-zinc-200 hover:bg-zinc-800 hover:cursor-pointer'
        )}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
        <div className="text-zinc-400">
          Search documents...
        </div>
        <div className="flex flex-row flex-nowrap items-center bg-zinc-700 p-[.1em_.75em] rounded-md">
          <i className="fa-solid fa-chevron-up text-[8px] relative top-[-3px] pr-[.5em]"></i>
          <span className="text-[12px]">K</span>
        </div>
      </div>
    </div>
  )

}

const SearchContainer = () => {

}