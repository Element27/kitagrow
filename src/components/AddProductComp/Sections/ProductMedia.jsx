import { MediaIcon } from "../../icons/icons"
import SectionLayout from "../SectionLayout/SectionLayout"
import istM from './inputStyling.module.scss'

const ProductMedia = ({ title, id }) => {
  return (
    <SectionLayout title={title} id={id}>
      <div className={istM.media}>
        <div className={istM.media_icon}>

          <label htmlFor="mediaInput">
            <input className={istM.disappear} name="mediaInput" />
            <MediaIcon />
            <p>Upload image click here or Drag & Drop</p>
          </label>
          <label htmlFor="mediaInput">
            <input className={istM.disappear} name="mediaInput" />
            <MediaIcon />
            <p>Upload image click here or Drag & Drop</p>
          </label>
          <label htmlFor="mediaInput">
            <input className={istM.disappear} name="mediaInput" />
            <MediaIcon />
            <p>Upload image click here or Drag & Drop</p>
          </label>
          <label htmlFor="mediaInput">
            <input className={istM.disappear} name="mediaInput" />
            <MediaIcon />
            <p>Upload image click here or Drag & Drop</p>
          </label>

        </div>

        <button>+ Add More Thumbnail Slots</button>

        <div className={istM.border_top}></div>

        <p className={istM.product_video}>Product Video <span>optional</span></p>
        <p className={istM.video_format}>Upload video below with mp4 or mov format, minimum 180 seconds (Max. 50mb video size)</p>


        <div className={istM.video_media}>
          <label htmlFor="mediaInput">
            <input className={istM.disappear} name="mediaInput" />
            <MediaIcon />
            <p>Upload image click here or Drag & Drop</p>
          </label>
          <label htmlFor="mediaInput">
            <input className={istM.disappear} name="mediaInput" />
            <MediaIcon />
            <p>Upload image click here or Drag & Drop</p>
          </label>
        </div>
      </div>

      <button className={istM.button}>+ Add More Video Slots</button>


    </SectionLayout>
  )
}

export default ProductMedia