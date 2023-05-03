
import LargerScreenNav from './LargerScreenNav'
import MobileNav from './MobileNav'
import navM from './nav.module.scss'

const Navigation = () => {

  return (
    <div className={navM.main_nav}>
      <MobileNav />
      <LargerScreenNav />
    </div>
  )
}

export default Navigation