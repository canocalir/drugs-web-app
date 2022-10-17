import { Link } from 'react-router-dom'
import style from './InteractionCard.module.scss'

const InteractionCard = ({ interactionData }) => {
  return (
    <div className={style.interactionCard}>
        <Link className={style.closeButton} to={"/"}>
        X
      </Link>
      <div className={style.detailsText}>
        {interactionData.map((inter) => (
        inter.description
      ))}
      </div>
    </div>
  )
}

export default InteractionCard