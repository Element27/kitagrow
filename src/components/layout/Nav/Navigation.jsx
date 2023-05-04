
import { useState } from 'react'
import LargerScreenNav from './LargerScreenNav'
import MobileNav from './MobileNav'
import navM from './nav.module.scss'

const Navigation = () => {
  const [fullNav, setfullNav] = useState(false)
  return (
    <div className={`${fullNav ? navM.main_nav_tab_full : navM.main_nav_tab_partial}`}>
      <MobileNav />
      <LargerScreenNav fullNav={fullNav} setfullNav={setfullNav} />
    </div >
  )
}

export default Navigation