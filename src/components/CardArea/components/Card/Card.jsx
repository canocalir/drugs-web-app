import Name from "./components/Name/Name";
import style from "./Card.module.scss";
import CardButtons from './components/CardButtons/CardButtons'
import { useState } from "react";
import { Search } from 'react-bootstrap-icons'

const Card = ({ name, rxcui }) => {
  const [isDrugCompareOpen, setIsDrugCompareOpen] = useState()
  return (
    <div className={style.card}>
      <Name name={name} rxcui={rxcui} />
      <div className={style.buttonArea}>

      <CardButtons isDrugCompareOpen={isDrugCompareOpen} setIsDrugCompareOpen={setIsDrugCompareOpen} rxcui={rxcui} />
      {isDrugCompareOpen
      ? <div className={style.inputContainer}>
        <h4>Enter a second drug name to get interaction</h4>
        <input className={style.compareInput} type="text" />
        <Search className={style.searchButton}/>
        </div>
    :null}
    </div>
      </div>
  );
};

export default Card;
