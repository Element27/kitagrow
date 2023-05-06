
import SectionLayout from "../SectionLayout/SectionLayout"
import istM from './inputStyling.module.scss'

const ProductVariant = ({ title, id }) => {
  return (
    <SectionLayout title={title} id={id}>

      <button className={istM.button}>+ Add Variant</button>

    </SectionLayout>
  )
}

export default ProductVariant