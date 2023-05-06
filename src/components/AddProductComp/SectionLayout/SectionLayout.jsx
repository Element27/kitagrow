import { CaretUpIcon } from '../../icons/icons';
import slyM from './sectionlayout.module.scss';

const SectionLayout = ({ children, title, id }) => {
  return (
    <div className={slyM.main} id={id}>
      {/* <div> */}
      <div className={slyM.title}>
        <h3>{title}</h3>
        <span>
          <CaretUpIcon />
          {/* <CaretdownIcon /> */}
        </span>
      </div>
      {/* </div> */}
      {children}
    </div>
  )
}

export default SectionLayout

