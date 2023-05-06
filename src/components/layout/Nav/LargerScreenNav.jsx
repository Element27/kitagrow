// import { useState } from 'react';
import { SummaryIcon, ReportIcon, LinkbankIcon, DashboardIconLarge, ProductListIconLarge, EmailIconLarge, CategoryIcon, ShowMenu, HideMenu, DiamondIcon } from "../../icons/icons"
import NavItem from "./NavItem"
import navM from "./nav.module.scss"
import logo from '../../../assets/logo.png'

const LargerScreenNav = ({ fullNav, setfullNav }) => {


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
      <div className={navM.toggleGroup}>
        <p className={navM.toggle}
          onClick={() => setfullNav(!fullNav)}>{fullNav ? <HideMenu /> : <ShowMenu />}</p>
        {fullNav && <img src={logo} className={navM.logo} />}
      </div>

      <div className={navM.menu_group}>
        <h4>{fullNav ? "Sales Analytics" : "Sales"}</h4>
        {salesAnalytics.map((item, index) => {
          return <NavItem key={index} title={item.title} icon={item.icon} isActive={item.isActive} fullNav={fullNav} />
        })}
      </div>
      <div className={navM.menu_group}>
        <h4>{fullNav ? "Product Management Services" : "Prod..."}</h4>
        {productMgt.map((item, index) => {
          return <NavItem key={index} title={item.title} icon={item.icon} isActive={item.isActive} fullNav={fullNav} />
        })}
      </div>
      <div className={navM.menu_group}>
        <h4>{fullNav ? "Email Messaging" : "Email"}</h4>
        {emailMsg.map((item, index) => {
          return <NavItem key={index} title={item.title} icon={item.icon} isActive={item.isActive} fullNav={fullNav} />
        })}
      </div>
      {fullNav &&
        <div className={navM.features}>
          <span className={navM.features_icon}><DiamondIcon /></span>
          <p>See Version 2.10 Feature
          </p>
          <div>2</div>
        </div>
      }
    </div>
  )
}

export default LargerScreenNav