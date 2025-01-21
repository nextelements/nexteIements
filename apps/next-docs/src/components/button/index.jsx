import { twMerge } from 'tailwind-merge'

export const IconButton = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className={twMerge(
        'bg-transparent transition border border-neutral-900 py-1 px-3 rounded-md',
        'hover:bg-neutral-900/30'
      )}>
      { children }
    </button>
  )
}