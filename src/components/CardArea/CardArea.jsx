import Card from "../Card/Card"
import style from './CardArea.module.scss'

const CardArea = () => {
  return (
    <div className={style.cardArea}>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default CardArea