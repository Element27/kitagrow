import { BellIcon, CaretdownIcon, SearchIcon } from '../../icons/icons'
import topbarM from './topar.module.scss'

const TopBar = () => {
  return (
    <div className={topbarM.s_container}>

      <div className={topbarM.page_title}>
        <p>Product List</p>
        <span><CaretdownIcon /></span>
      </div>



      <div className={topbarM.page_icons}>
        <SearchIcon />
        <BellIcon />
      </div>
    </div>
  )
}

export default TopBar