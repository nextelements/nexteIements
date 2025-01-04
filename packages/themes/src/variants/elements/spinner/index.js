import { tv } from 'tailwind-variants'

const spinner = tv({
  variants: {
    color: {
      default: 'text-default',
      primary: 'text-primary',
      secondary: 'text-secondary',
      success: 'text-success',
      warning: 'text-warning',
      danger: 'text-danger',
    },
  }
})

export { spinner }