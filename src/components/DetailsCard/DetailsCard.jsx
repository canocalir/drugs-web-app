import { Link } from 'react-router-dom'
import style from './DetailsCard.module.scss'

const DetailsCard = ({drugDetails}) => {
  return (
    <div className={style.detailsCard}>
        <Link className={style.closeButton} to={'/'}>X</Link>
        <div>
            {console.log(drugDetails)}
        </div>
    </div>
  )
}

export default DetailsCard