import { useContext } from "react";
import Card from "./components/Card/Card";
import style from "./CardArea.module.scss";
import { DrugContext } from "../../context/drugContext";

const CardArea = () => {
  const drugData = useContext(DrugContext);
  const { searchData } = drugData;
  return (
    <div className={searchData ? style.cardArea : style.cardAreaHidden}>
      {searchData
        ? searchData.map((drug, id) => (
            <div key={id}>
              <Card id={id} rxcui={drug.rxcui} name={drug.synonym} />
            </div>
          ))
        : null}
    </div>
  );
};

export default CardArea;
