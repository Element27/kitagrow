
import SectionLayout from "../SectionLayout/SectionLayout"
import istM from './inputStyling.module.scss'

const ProductDetails = ({ title, id }) => {
  return (
    <SectionLayout title={title} id={id}>
      <div className={istM.form_radio_group}>
        <p className={istM.label}>Product Condition</p>
        <div className={istM.radio_group}>
          <label>
            <input type="radio" name="condition" /> <p>New Product</p>
          </label>
          <label>
            <input type="radio" name="condition" /> <p>Already Used</p>
          </label>
          <label>
            <input type="radio" name="condition" /> <p>Pre Order</p>
          </label>
        </div>
      </div>

      <div className={istM.border_top}></div>

      <div className={istM.form_item}>
        <>
          <label>
            <p className={istM.label}>Product Name</p> <p className={istM.grey} >0/90</p>
          </label>
          {/* <input type="text" placeholder="ex. Product Brand - Product Type..." /> */}
          <textarea placeholder="ex. tell your product specs, material, how to used, etc..."></textarea>
        </>
      </div>

      {/*  */}
      {/* 

 */}
      <div className={istM.form_group}>
        <div className={istM.form_group_item}>
          <label>
            <p className={istM.label}>Stock Keeping Unit Code
            </p>

          </label>
          <input type="text" placeholder="Enter SKU Code..." />
        </div>
        <div className={istM.form_group_item}>
          <label>
            <p className={istM.label}>Product Weight
            </p>

          </label>
          <div className={istM.prod_weight}>
            <select>
              <option>Gram</option>
            </select>
            <input type="number" placeholder="Enter Weight..." />
          </div>
        </div>

      </div>
      <div className={istM.form_group}>
        <div className={istM.form_group_item}>
          <label>
            <p className={istM.label}>Product Dimension
            </p>
          </label>
          <div className={istM.form_flow}>
            <div className={istM.form_flow_input}>
              <input type="number" placeholder="Length" />
              <p>CM</p>
            </div>
            <div className={istM.form_flow_input}>
              <input type="text" placeholder="Enter SKU Code..." />
              <p>CM</p>
            </div>
            <div className={istM.form_flow_input}>
              <input type="text" placeholder="Enter SKU Code..." />
              <p>CM</p>
            </div>
          </div>
        </div>

      </div>
    </SectionLayout>
  )
}

export default ProductDetails