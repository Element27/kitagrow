import { SummaryIcon, ReportIcon, LinkbankIcon, DashboardIconLarge, ProductListIconLarge, EmailIconLarge, CategoryIcon } from "../../icons/icons"
import NavItem from "./NavItem"
import navM from "./nav.module.scss"

const LargerScreenNav = () => {
  const salesAnalytics = [
    {
      title: "Dashboard",
      icon: <DashboardIconLarge />,
      // link: "#",
      isActive: false,
    },
    {
      title: "Reports",
      icon: <ReportIcon />,
      // link: "#",
      isActive: false,
    },
    {
      title: "Link Bank Account",
      icon: <LinkbankIcon />,
      // link: "#",
      isActive: false,
    },
  ]
  const productMgt = [
    {
      title: "Summary",
      icon: <SummaryIcon />,
      // link: "#",
      isActive: false,
    },
    {
      title: "Product List",
      icon: <ProductListIconLarge />,
      // link: "#",
      isActive: true,
    },
    {
      title: "Category List",
      icon: <CategoryIcon />,
      // link: "#",
      isActive: false,
    },
  ]
  const emailMsg = [
    {
      title: "Email Message List",
      icon: <EmailIconLarge />,
      // link: "#",
      isActive: false,
    },

  ]




  return (
    <div className={navM.large_nav}>
      <div className={navM.menu_group}>
        <h4>Sales Analytics</h4>
        {salesAnalytics.map((item, index) => {
          return <NavItem key={index} title={item.title} icon={item.icon} isActive={item.isActive} />
        })}
      </div>
      <div className={navM.menu_group}>
        <h4>Product Management Services</h4>
        {productMgt.map((item, index) => {
          return <NavItem key={index} title={item.title} icon={item.icon} isActive={item.isActive} />
        })}
      </div>
      <div className={navM.menu_group}>
        <h4>Email Messaging</h4>
        {emailMsg.map((item, index) => {
          return <NavItem key={index} title={item.title} icon={item.icon} isActive={item.isActive} />
        })}
      </div>
    </div>
  )
}

export default LargerScreenNav