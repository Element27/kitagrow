
// import AddProductTop from '../../../components/AddProductComp/AddProdTop/addProductTop';
import AddProductTop from '../../components/AddProductComp/AddProdTop/addProductTop'
import QuickAccess from '../../components/AddProductComp/QuickAccess/QuickAccess'
import ProductDetails from '../../components/AddProductComp/Sections/ProductDetails'
// import SectionLayout from '../../components/AddProductComp/SectionLayout/SectionLayout'
import ProductInformation from '../../components/AddProductComp/Sections/ProductInformation'
import ProductMangement from '../../components/AddProductComp/Sections/ProductMangement'
import ProductMedia from '../../components/AddProductComp/Sections/ProductMedia'
import ProductVariant from '../../components/AddProductComp/Sections/ProductVariant'
import anpM from './AddNewPage.module.scss'

const AddNewPage = () => {

  return (
    <div className={anpM.addnewpage}>
      {/* right hand side */}
      <AddProductTop />

      <div className={anpM.container}>
        <div className={anpM.content}>

          <ProductInformation title="Product Information" id="information"
          />
          <ProductMangement title="Product Mangement" id="mangement" />
          <ProductDetails title="Product Details" id="details" />
          <ProductMedia title="Product Media" id="media" />
          <ProductVariant title="Product Variant" id="variant" />

        </div>

        <div className={anpM.nav}>
          <div className={anpM.inner}>
            <QuickAccess />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewPage