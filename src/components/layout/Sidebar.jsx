
import Navigation from './Nav/Navigation'
import TopBar from './Topbar/TopBar'
import TopBarLarge from './Topbar/TopBarLarge'
import sidebarM from './sidebar.module.scss'

const Sidebar = ({ children, }) => {
  return (
    <div className={sidebarM.layout_container}>

      <div className={sidebarM.sidebar_container}>
        {/* this is the side bar container */}
        <Navigation />
      </div>

      <div className={sidebarM.view_container}>
        <TopBar />
        <TopBarLarge />
        <div className={sidebarM.children}>

          {children}
        </div>
      </div>
    </div>
  )
}

export default Sidebar