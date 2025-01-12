import React from 'react'
import { UnresolveIcon } from '@nextelements/icons'

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <UnresolveIcon className="inline-block" />
      <p className="text-[110%] font-semibold">resolve.ui</p>
    </div>
  )
}

export { Logo }
