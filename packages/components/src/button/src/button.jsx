import { button } from '@nextelements/themes'
import { classNames } from '@nextelements/utilities'

export const Button = ({ children, extendedClassNames, ...props }) => {

  const classes = classNames(button(), extendedClassNames, props.className)
  return <button className={classes}>{children}</button>
}

Button.displayName = 'NextElements.Button';