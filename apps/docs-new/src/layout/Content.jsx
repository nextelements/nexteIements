const Content = ({ children }) => {
  return (
    <section className="content">
      { children || 'Container' }
    </section>
  )
}

export { Content }