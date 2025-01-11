import React from 'react'
import Image from 'next/image'

const LogoIcon = ({ size = 36, ...props }) => ( 
  <Image 
    src="https://www.svgrepo.com/show/303157/react-logo.svg"
    alt="Logo"
    width={size}
    height={size}
  />
)

const Logo = () => {
  return (
    <>
      <div className="flex">
        <LogoIcon />
        <div className="text-semibold">
          Reactify
          <span className="text-[10px] text-gray-300 block">0.0.0-alpha</span></div>
      </div>
    </>
  )
}

export { Logo }
