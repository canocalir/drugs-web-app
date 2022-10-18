import Name from "./components/Name/Name";
import style from "./Card.module.scss";
import CardButtons from "./components/CardButtons/CardButtons";
import { useEffect, useState } from "react";
import CompareSearch from "./components/CardButtons/components/CompareSearch/CompareSearch";

const Card = ({ name, rxcui }) => {
  const [isDrugCompareOpen, setIsDrugCompareOpen] = useState(false);
  const [secondDrugInputValue, setSecondDrugInputValue] = useState('');
  const [secondRxcui, setSecondRxcui] = useState();
  const [secondName, setSecondName] = useState();

  useEffect(() => {
    const secondRxcuiFinderHandler = async () => {
      try {
        const urlNewDrug =
        process.env.REACT_APP_DRUG_SEARCH_BASE_URL +
        `?name=${secondDrugInputValue}`;
      const res = await fetch(urlNewDrug);
      const data = await res.json();
        setSecondRxcui(
          data.drugGroup.conceptGroup[1].conceptProperties[0].rxcui
        );
        setSecondName(data.drugGroup.conceptGroup[1].conceptProperties[0].synonym);
      } catch (error) {
      }
    };
    
    secondRxcuiFinderHandler();
    setSecondDrugInputValue('')
  }, [secondDrugInputValue]);
  
  return (
    <div className={style.card}>
      <Name name={name} rxcui={rxcui} />
      <div className={style.buttonArea}>
        <CardButtons
          isDrugCompareOpen={isDrugCompareOpen}
          setIsDrugCompareOpen={setIsDrugCompareOpen}
          rxcui={rxcui}
        />
        <form>
          {isDrugCompareOpen ? (
            <div className={style.inputContainer}>
              <h4>Enter a second drug name to get interaction</h4>
              <input
              autoFocus
                onChange={(e) => setSecondDrugInputValue(e.target.value)}
                className={style.compareInput}
                type="text"
              />
              <CompareSearch
                name={name}
                secondName={secondName}
                secondRxcui={secondRxcui}
                rxcui={rxcui}
              />
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Card;
