import { getItems } from '@/lib/items'

const items = getItems()

export const documents = [
  {
    title: 'Introduction',
    items: items.introduction
  },
  {
    title: 'Customization',
    items: items.customization
  },
  {
    title: 'Utilities',
    items: items.utilities
  },
  {
    title: 'Components',
    items: [ items.components ]
  },  
]