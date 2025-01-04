import { spinner } from '@nextelements/themes'
import { classNames } from '@nextelements/utilities'

export const Spinner = ({ color = 'primary', size = 'small', className }) => {

  const classes = classNames(spinner({ color, size }), className)
  


  return (
    <div className={classes} style={{ borderTopColor: 'transparent' }}></div>
  )
}

Spinner.displayName = 'NextElements.Spinner';