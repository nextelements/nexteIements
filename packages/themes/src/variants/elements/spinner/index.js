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
    strokeColor: {
      default: 'stroke-black/10 dark:stroke-white/10'
    },
    size: {
      small: 'w-[14px] h-[14px]',
      medium: 'w-[28px] h-[28px]',
      large: 'w-[56px] h-[56px]',
      extralarge: 'w-[112px] h-[112px]',
    }
  }
})

export { spinner }