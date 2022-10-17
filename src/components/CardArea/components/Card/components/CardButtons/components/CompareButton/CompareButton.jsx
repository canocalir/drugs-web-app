import style from './CompareButton.module.scss'

const CompareButton = ({ setIsDrugCompareOpen, isDrugCompareOpen }) => {

const drugCompareHandler = () => {
  isDrugCompareOpen
  ? setIsDrugCompareOpen(false)
  : setIsDrugCompareOpen(true)
}

  return (
        <button onClick={drugCompareHandler} className={style.compareButton}>Compare</button>
  )
}

export default CompareButton