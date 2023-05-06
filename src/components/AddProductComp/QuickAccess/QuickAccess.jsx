import { useLocation } from "react-router-dom"
import { useEffect } from "react";
import qaM from './quickaccess.module.scss'

const QuickAccess = () => {
  const { hash, key, pathname } = useLocation();

  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0)
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)

        if (element) {
          element.scrollIntoView()
        }
      }, 0)
    }

  }, [pathname, hash, key])

  return (
    <div className={qaM.quickaccess}>
      <h3>Quick Access</h3>
      <a href='#information' className={qaM.link}><span>Product</span> Information</a>
      <a href='#mangement' className={qaM.link}><span>Product</span> Management</a>
      <a href='#details' className={qaM.link}><span>Product</span> Details</a>
      <a href='#media' className={qaM.link}><span>Product</span> Media</a>
      <a href='#variant' className={qaM.link}><span>Product</span> Variant</a>
    </div>
  )
}

export default QuickAccess

// productinformation
// productmanagement
// productdetails
// productmedia
// productvariant