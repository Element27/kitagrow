import { CaretIconLarge, FilterIcon, SearchIconLarge } from '../../components/icons/icons'
import plpM from './productlistpage.module.scss'

const ProductListPage = () => {
  return (
    <div className={plpM.container}>
      <div className={plpM.slug}>
        <h3>Product List</h3>
        <p>Manage & Add Product list on your marketplace</p>
      </div>
      <div className={plpM.top}>
        {/* <div className={plpM.mobile}></div> */}
        {/* <div className={plpM.large}></div> */}


        <button className={plpM.addnewbtn}>+ Add New Product</button>

        <div className={plpM.icon}>
          <FilterIcon />
        </div>

        <div className={plpM.top_large}>
          <div className={plpM.searchbox}>
            <input placeholder='Search by Product Name...' />
            <span className={plpM.search}>
              <SearchIconLarge />
            </span>
          </div>

          <div className={plpM.filter}>
            <p>Filter Product Status</p>
            <CaretIconLarge />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListPage