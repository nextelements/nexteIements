export const Header = ({ children }) => {
  return (
    <div className="header">
      <div className="wrapper flex flex-row flex-nowrap">
        <div className="text-left">Left</div>
        <div className="w-full text-center">Center</div>
        <div className="text-right">Right</div>
      </div>
    </div>
  )
}