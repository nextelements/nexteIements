import { Wrapper } from './Wrapper'
import { Logo } from './Logo'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="header">
      <Wrapper>
        <Logo />
        <div className="nav">
          <li><Link href="/introduction">Introduction</Link></li>
          <li><Link href="/customization">Customization</Link></li>
          <li><Link href="/components">Components</Link></li>
        </div>
      </Wrapper>
    </div>
  )
}

export { Header }