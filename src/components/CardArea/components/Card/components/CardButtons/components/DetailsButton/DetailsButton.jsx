import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './DetailsButton.module.scss'

const DetailsButton = ({ fetchDrugDetails, rxcui }) => {

  useEffect(() => {
    fetchDrugDetails()
  },[])
  return (
    <Link 
      onClick={fetchDrugDetails} 
      to={`/drug-detail/${rxcui}`}
      className={style.detailsButton}>Details</Link>
  )
}

export default DetailsButton