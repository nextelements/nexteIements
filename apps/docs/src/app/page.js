import { Button } from '@nextelements/components'
import { ThemeToggle, extendVariant, button } from '@nextelements/themes'

export default function() {

  console.log(button())

  return (
    <div>
      <Button>Button from a extern component</Button>
      <div className={button()}>LOL</div>
      <ThemeToggle />
    </div>
  )
}
