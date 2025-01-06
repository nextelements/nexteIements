import { tv } from 'tailwind-variants'

const button = tv({
  base: 'px-4 py-2 hover:cursor-pointer font-semibold rounded-md shadow-md active:shadow-sm transition-all duration-200',
  variants: {
    color: {
      default: 'bg-default hover:bg-default-600',
      primary: 'bg-primary hover:bg-primary-600',
      secondary: 'bg-secondary hover:bg-secondary-600',
      success: 'bg-success hover:bg-success-600',
      warning: 'bg-warning hover:bg-warning-600',
      danger: 'bg-danger hover:bg-danger-600',
    }
  }
})

export { button }