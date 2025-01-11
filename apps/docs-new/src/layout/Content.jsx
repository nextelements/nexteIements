const Content = ({ children }) => {
  return (
    <div className="content">
      { children || 'Container' }
    </div>
  )
}

export { Content }