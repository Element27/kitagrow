
import Navigation from './Nav/Navigation'
import sidebarM from './sidebar.module.scss'

const Sidebar = ({ children, }) => {
  return (
    <div className={sidebarM.layout_container}>
      <div className={sidebarM.sidebar_container}>
        {/* this is the side bar container */}
        <div>
          <Navigation />
        </div>
      </div>
      <div className={sidebarM.children}>

      {children}
      </div>
    </div>
  )
}

export default Sidebar