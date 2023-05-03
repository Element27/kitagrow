import { DashboardIcon, EmailIcon, MoreIcon, ProductListIconLarge } from "../../icons/icons"
import NavItem from "./NavItem"
import navM from "./nav.module.scss"

const MobileNav = () => {
  // 
  const navItems = [
    {
      title: "sales",
      icon: <DashboardIcon />,
      // link: "#",
      isActive: false,
    },
    {
      title: "product",
      icon: <ProductListIconLarge />,
      // link: "#",
      isActive: true,
    },
    {
      title: "sales",
      icon: < EmailIcon />,
      // link: "#",
      isActive: false,
    },
    {
      title: "more",
      icon: < MoreIcon />,
      // link: "#",
      isActive: false,
    },
  ]

  return (
    <div className={navM.mobile_nav}>
      {navItems.map((item, index) => {
        return <NavItem key={index} title={item.title} icon={item.icon} isActive={item.isActive} />
      })}
    </div>
  )
}

export default MobileNav