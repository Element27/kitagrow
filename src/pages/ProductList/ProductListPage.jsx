import { products } from '../../../productData'
import { CaretIconLarge, CaretRightIcon, FilterIcon, SearchIconLarge, CaretLeftIcon, CaretdownIcon } from '../../components/icons/icons'
import ProductListTr from '../../components/productlistComp/ProductListTr'
import plpM from './productlistpage.module.scss'

const ProductListPage = () => {
  return (
    <>
      <div className={plpM.container}>
        <div className={plpM.slug}>
          <h3>Product List</h3>
          <p>Manage & Add Product list on your marketplace</p>
        </div>
        <div className={plpM.top}>


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

      {/* Product list display */}
      <table>
        <thead>
          <tr className={plpM.thead_tr}>
            <th className={plpM.checkbox}></th>
            <th className={plpM.prodDetail}>Product Name</th>
            <th className={plpM.stock}>Stock</th>
            <th className={plpM.price}>Price</th>
            <th className={plpM.graph}>Sales Graph</th>
            <th className={plpM.icon}></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            const { src,
              productName,
              category,
              stock,
              price,
              graph, stat } = product;

            let node = false
            if (stat.charAt(0) == "+") {
              node = true
            }
            return <ProductListTr
              key={index}
              src={src} productName={productName} category={category} stock={stock} price={price} graph={graph} stat={stat} node={node}
            />
          })
          }
        </tbody>
      </table >
      <div className={plpM.bottom_nav}>
        <div className={plpM.page_count}>
          <p>10 List per Page</p><span><CaretdownIcon /></span>
        </div>

        <div className={plpM.table_nav}>
          <p className={plpM.table_nav_prev}><CaretLeftIcon /></p>
          <p className={plpM.table_nav_count}>1</p>
          <p className={plpM.table_nav_next}><CaretRightIcon /></p>
        </div>
      </div>
    </>
  )
}

export default ProductListPage