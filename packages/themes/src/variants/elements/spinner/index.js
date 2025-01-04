import { tv } from 'tailwind-variants'

const spinner = tv({
  base: `border-4 rounded-full animate-spin`,
  variants: {
    color: {
      default: 'border-default',
      primary: 'border-primary',
      secondary: 'border-secondary',
      success: 'border-success',
      warning: 'border-warning',
      danger: 'border-danger',
    },
    size: {
      small: 'w-8 h-8',
      medium: 'w-16 h-16',
      large: 'w-32 h-32'
    }
  }
})

export { spinner }