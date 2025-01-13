import { tv } from 'tailwind-variants'

const button = tv({
  base: 'px-4 py-2 hover:cursor-pointer rounded-md shadow-md active:shadow-sm transition-all duration-200 text-white',
  variants: {
    color: {
      default: 'bg-default hover:bg-default-800 dark:text-black',
      primary: 'bg-primary hover:bg-primary-600',
      secondary: 'bg-secondary hover:bg-secondary-600',
      success: 'bg-success hover:bg-success-600',
      warning: 'bg-warning hover:bg-warning-600',
      danger: 'bg-danger hover:bg-danger-600',
    },
    ripple: {
      default: 'bg-black/50',
      primary: 'bg-white/50',
      secondary: 'bg-white/50',
      success: 'bg-white/50',
      warning: 'bg-white/50',
      danger: 'bg-white/50',
    }
  }
})

export { button }
