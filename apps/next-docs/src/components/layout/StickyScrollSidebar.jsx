export const StickyScrollSidebar = ({ children }) => {
  return (
    <div className={`sticky top-[60px]`}>
      <div className={`p-[1em] h-[calc(100vh_-_60px)] overflow-y-auto`}>
        {children}
      </div>
    </div>
  )
}