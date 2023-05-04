import { BellIconLarge, CaretIconLarge, SearchIconLarge } from '../../icons/icons'
import topbarM from './topar.module.scss'

const TopBarLarge = () => {
  return (
    <div className={topbarM.l_contianer}>
      <div className={topbarM.searchbox}>
        <input placeholder='search something...' />
        <span className={topbarM.search}>
          <SearchIconLarge />
        </span>
      </div>
      <div className={topbarM.profile}>
        <span >
          <BellIconLarge />
        </span>

        <div>
          <span className={topbarM.avatar}>M</span>
          <p>Maxwell Anderson</p>
          <CaretIconLarge />
        </div>

      </div>
    </div>
  )
}

export default TopBarLarge