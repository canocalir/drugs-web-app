import { useContext } from "react"
import Card from "../Card/Card"
import style from './CardArea.module.scss'
import { DrugContext } from "../../context/drugContext";
const CardArea = () => {
  const drugData = useContext(DrugContext);
  const { searchData } = drugData;
  console.log(searchData)
  return (
    <div className={ searchData !== undefined && searchData !== null ? style.cardArea : style.cardAreaHidden }>
        {searchData ? searchData.map((drug, id) => (
          <div key={id}>
          <Card drug={drug}/>
          </div>
        )) : null}
    </div>
  )
}

export default CardArea