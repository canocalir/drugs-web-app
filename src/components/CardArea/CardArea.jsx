import { useContext } from "react";
import Card from "./components/Card/Card";
import style from "./CardArea.module.scss";
import { DrugContext } from "../../context/drugContext";
import CompareButton from "./components/CompareButton/CompareButton";
const CardArea = () => {
  const drugData = useContext(DrugContext);
  const { searchData, selectedDrugs } = drugData;
  return (
    <div
      className={
        searchData && searchData !== null
          ? style.cardArea
          : style.cardAreaHidden
      }
    >
      <h4>Select 2 Drugs to get Interactions Info</h4>
      <CompareButton selectedDrugs={selectedDrugs}/>
      {searchData
        ? searchData.map((drug, id) => (
            <div key={id}>
              <Card rxcui={drug.rxcui} name={drug.name} />
            </div>
          ))
        : null}
    </div>
  );
};

export default CardArea;
