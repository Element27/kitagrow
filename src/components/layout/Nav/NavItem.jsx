
import navM from "./nav.module.scss"

const NavItem = ({ icon, title, isActive }) => {
  return (
    // this div should be  link. it is meant to handle routing
    // <div className={navM.navitem} >
    <div className={`${!isActive ? navM.navitem : navM.active}`} >
      <div>
        {icon}
      </div>
      < p > {title}</p >
    </div >
  )
}

export default NavItem