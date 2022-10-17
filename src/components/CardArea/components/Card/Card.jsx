import Name from "./components/Name/Name";
import style from "./Card.module.scss";
import CardButtons from "./components/CardButtons/CardButtons";
import { useEffect, useState } from "react";
import CompareSearch from "./components/CardButtons/components/CompareSearch/CompareSearch";


const Card = ({ name, rxcui }) => {
  const [isDrugCompareOpen, setIsDrugCompareOpen] = useState();
  const [secondDrugInputValue, setSecondDrugInputValue] = useState();
  const [secondRxcui, setSecondRxcui] = useState();

  const secondRxcuiFinderHandler = async () => {
    const urlNewDrug =
      process.env.REACT_APP_DRUG_SEARCH_BASE_URL +
      `?name=${secondDrugInputValue}`;
    const res = await fetch(urlNewDrug);
    const data = await res.json();
    setSecondRxcui(data.drugGroup.conceptGroup[1].conceptProperties[0].rxcui)
  }

useEffect(() => {
    secondRxcuiFinderHandler()
},[secondDrugInputValue])

  

  return (
    <div className={style.card}>
      <Name name={name} rxcui={rxcui} />
      <div className={style.buttonArea}>
        <CardButtons
          isDrugCompareOpen={isDrugCompareOpen}
          setIsDrugCompareOpen={setIsDrugCompareOpen}
          rxcui={rxcui}
        />
        {isDrugCompareOpen ? (
          <div className={style.inputContainer}>
            <h4>Enter a second drug name to get interaction</h4>
            <input
              onChange={(e) => setSecondDrugInputValue(e.target.value)}
              className={style.compareInput}
              type="text"
            />
           <CompareSearch secondRxcui={secondRxcui} rxcui={rxcui}/>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
