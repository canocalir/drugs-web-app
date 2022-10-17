import { Link } from 'react-router-dom'
import style from './InteractionCard.module.scss'

const InteractionCard = ({ interactionData }) => {
  return (
    <div className={style.interactionCard}>
        <Link className={style.closeButton} to={"/"}>
        X
      </Link>
        {interactionData.map((inter) => (
        inter.description
      ))}
    </div>
  )
}

export default InteractionCard