import { Button } from '@nextelements/components'
import { ThemeToggle, extendVariant } from '@nextelements/themes'

const MyButton = extendVariant(Button, {
  base: 'px-4 py-2 rounded-lg text-lg bg-blue-600',
});

export default function() {
  return (
    <div>
      <Button>Button from a extern component</Button>
      <MyButton>Extended Button from a extern component</MyButton>
      <ThemeToggle />
    </div>
  )
}
