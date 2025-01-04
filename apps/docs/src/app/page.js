import { Button, Spinner } from '@nextelements/components'
import { ThemeToggle, extendVariant } from '@nextelements/themes'

const MyButton = extendVariant(Button, {
  base: 'px-4 py-2 rounded-lg text-lg bg-blue-600',
});

export default function() {
  return (
    <div>
      <Spinner />
      <Button>Button from a extern component</Button>
      <MyButton className="text-sm">Extended Button from a extern component</MyButton>
      <Button className="bg-green-400">Button from a extern component</Button>
      <ThemeToggle /><br />
    </div>
  )
}
