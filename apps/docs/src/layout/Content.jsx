import { Children } from 'react'

const Content = ({ children }) => {
  return (
    <section className="content">
      { children }
    </section>
  )
}

export { Content }