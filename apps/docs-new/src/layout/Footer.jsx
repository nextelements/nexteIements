import { Wrapper } from './Wrapper'

const Footer = ({ children }) => {
  return (
    <div className="footer">
      <Wrapper>
        { children || 'Footer' }
      </Wrapper>
    </div>
  )
}

export { Footer }