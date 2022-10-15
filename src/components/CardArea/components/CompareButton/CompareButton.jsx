import style from './CompareButton.module.scss'

const CompareButton = ({selectedDrugs}) => {
  return (
    <div className={selectedDrugs.length === 2 ? style.buttonContainer :style.buttonContainerHidden}>
        <button className={style.compareButton}>Compare</button>
    </div>
  )
}

export default CompareButton