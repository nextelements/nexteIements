import { button } from '@nextelements/themes'
import { classNames } from '@nextelements/utilities'

export const Button = ({ children, className }) => {
  return <button className={classNames(button(), className)}>{children}</button>
}

Button.displayName = 'NextElements.Button';