import SectionLayout from "../SectionLayout/SectionLayout"
import istM from './inputStyling.module.scss'

const ProductMangement = ({ title, id }) => {
  return (
    <SectionLayout title={title} id={id}>

      <div className={istM.form_group}>
        <div className={istM.form_group_item}>
          <label>
            <p className={istM.label}>Product Price
            </p>

          </label>
          <input type="text" placeholder="Enter Product Price..." />
        </div>
        <div className={istM.form_group_item}>
          <label>
            <p className={istM.label}>Product Stock</p>
          </label>
          <input type="number" placeholder="Enter Product Stock..." />

        </div>

      </div>
      <div className={istM.border_top}></div>
      <div className={istM.form_radio_group}>
        <p className={istM.label}>Shipping Insurance</p>
        <div className={istM.radio_group}>
          <label>
            <input type="radio" name="insurance" /> <p><strong>Required</strong> (Obligate the buyer to active)</p>
          </label>
          <label>
            <input type="radio" name="insurance" /> <p><strong>Optional</strong> (Give option to buyer to active or not)</p>
          </label>
        </div>
      </div>
    </SectionLayout>
  )
}

export default ProductMangement


