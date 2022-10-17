import style from './CardButtons.module.scss'
import { useContext } from 'react'
import { DrugContext } from '../../../../../../context/drugContext'
import CompareButton from './components/CompareButton/CompareButton'
import DetailsButton from './components/DetailsButton/DetailsButton'

const CardButtons = ({rxcui, isDrugCompareOpen, setIsDrugCompareOpen}) => {

  const buttonsSetter = useContext(DrugContext)
  const { setDrugDetails } = buttonsSetter
  const fetchDrugDetails = async () => {
    const rxcuiUrl = process.env.REACT_APP_DRUG_DETAILS_BASE_URL +`${rxcui}/historystatus.json`;
    const res = await fetch(rxcuiUrl)
    const data = await res.json()
    setDrugDetails(data)
  }

  return (
    <div className={style.buttonContainer}>
      <DetailsButton
      rxcui={rxcui} fetchDrugDetails={fetchDrugDetails}/>
      {<CompareButton 
      setIsDrugCompareOpen={setIsDrugCompareOpen}
      isDrugCompareOpen={isDrugCompareOpen}/>}
    </div>
  )
}

export default CardButtons