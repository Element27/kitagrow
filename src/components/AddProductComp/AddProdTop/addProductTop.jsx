
import { Link } from "react-router-dom"
import { ArrowbackIcon, CaretLeftIcon } from "../../icons/icons"
import aptM from "./addprodtop.module.scss"

const AddProductTop = () => {
  return (
    <div className={aptM.container}>
      <div className={aptM.title}>
        <Link to='/' className={aptM.caret}>
          <CaretLeftIcon />
        </Link>
        <Link to='/' className={aptM.arrow}>
          <ArrowbackIcon />
        </Link>
        <p>Add New Product</p>
      </div>

      <div className={aptM.btns}>
        <button className={aptM.draft}>Save as Draft</button><button className={aptM.publish}>Publish Product</button>
      </div>
    </div>
  )
}

export default AddProductTop
