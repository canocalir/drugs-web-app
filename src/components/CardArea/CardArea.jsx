import { useContext } from "react"
import Card from "../Card/Card"
import style from './CardArea.module.scss'
import { DrugContext } from "../../context/drugContext";
const CardArea = () => {
  const drugData = useContext(DrugContext);
  const { searchData } = drugData;
  return (
    <div className={ searchData && searchData !== null ? style.cardArea : style.cardAreaHidden }>
        {searchData ? searchData.map((drug, id) => (
          <div key={id}>
          <Card rxcui={drug.rxcui} name={drug.name}/>
          </div>
        )) : null}
    </div>
  )
}

export default CardArea