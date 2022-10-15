import style from './DetailsButton.module.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DrugContext } from '../../../../../../context/drugContext'

const DetailsButton = ({rxcui}) => {

  const detailSetter = useContext(DrugContext)
  const { setDrugDetails } = detailSetter

  const fetchDrugDetails = async () => {
    const rxcuiUrl = process.env.REACT_APP_DRUG_DETAILS_BASE_URL +`${rxcui}/historystatus.json`;
    const res = await fetch(rxcuiUrl)
    const data = await res.json()
    setDrugDetails(data)
  }

  return (
    <div className={style.buttonContainer}>
      <Link onClick={fetchDrugDetails} to="drug-detail" className={style.button}>Details</Link>
    </div>
  )
}

export default DetailsButton