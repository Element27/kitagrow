import { CaretRightIcon, CopyIcon, DelIcon, EditIcon } from '../icons/icons'
import pltM from './productlisttr.module.scss'

const ProductListTr = ({ src, productName, category, stock, price, graph, stat, node }) => {

  console.log(stat, node)
  return (
    <tr className={pltM.tr}>
      <td className={pltM.checkbox}><input type="checkbox" /></td>
      <td className={pltM.prod}>
        <div className={pltM.prodDetail}>
          <img src={src} />
          <div >
            <h4>{productName}</h4>
            <p>{category}</p>
          </div>
        </div>
      </td>
      <td className={pltM.stock}>{stock}</td>
      <td className={pltM.price}>{price}</td>
      <td className={pltM.graph}>
        <div className={pltM.graph_inner}>
          <img src={graph} />
          <span className={`${node ? pltM.rise : pltM.fall}`}>{stat}</span>
        </div>
      </td>
      <td className={pltM.icon}>

        <div className={pltM.sm_icon}>
          <CaretRightIcon />
        </div>
        <div className={pltM.lg_icon}>
          <CopyIcon />
          <EditIcon />
          <DelIcon />
        </div>
      </td>
    </tr>
  )
}

export default ProductListTr