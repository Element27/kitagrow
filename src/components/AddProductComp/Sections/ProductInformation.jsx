import SectionLayout from "../SectionLayout/SectionLayout"
import istM from './inputStyling.module.scss'

const ProductInformation = ({ title, id }) => {
  return (
    <SectionLayout title={title} id={id}>
      <div>
        <div className={istM.form_item}>
          <>
            <label>
              <p className={istM.label}>Product Name</p> <p className={istM.grey} >0/90</p>
            </label>
            <input type="text" placeholder="ex. Product Brand - Product Type..." />
          </>
        </div>

        <div className={istM.form_group}>
          <div className={istM.form_group_item}>
            <label>
              <p className={istM.label}>Product Category</p>
            </label>
            <select>
              <option value="" default>Select Product Category</option>
            </select>
          </div>

          <div className={istM.form_group_item}>
            <label>
              <p className={istM.label}>Product ID</p>
              <p className={istM.blue}>Copy</p>
            </label>
            <input type="text" placeholder="ex. Product Brand - Product Type..." className={istM.grey_input} />
          </div>

        </div>


      </div>
    </SectionLayout>
  )
}

export default ProductInformation