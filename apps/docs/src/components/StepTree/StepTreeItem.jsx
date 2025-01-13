import './style.css'

export const StepTreeItem = ({ children, title, step }) => {
  return (
    <>
      <div className="item">
        <div className="title" data-step={step}>{title}</div>
        <div className="content">
          {children}
        </div>
      </div>
    </>
  )
}
