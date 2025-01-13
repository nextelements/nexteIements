import './style.css'

import React from 'react'

export const StepTree = ({ children }) => {
  return (
    <>
      <div className="steptree">
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            step: index + 1,
          });
        })}
      </div>
    </>
  )
}
