import React, { useContext, useState } from "react";
import Name from "./components/Name/Name";
import style from "./Card.module.scss";
import Details from "./components/DetailsButton/DetailsButton";
import { CheckCircle } from "react-bootstrap-icons";
import { DrugContext } from "../../context/drugContext";

const Card = ({ name, rxcui }) => {

  const selected = useContext(DrugContext)
  const { selectedDrugs, setSelectedDrugs} = selected

  const [isChecked, setChecked] = useState(false)

  const checkDrugHandler = (e) => {
    isChecked && [e.target.id]
    ? setChecked(false)
    : setChecked(true)
    !isChecked && [e.target.id]
    ? setSelectedDrugs(prev => [...prev, rxcui])
    : setSelectedDrugs(selectedDrugs.filter(drug => drug !== rxcui))
  }

  return (
    <div className={isChecked ? style.cardChecked :style.card}>
      <CheckCircle onClick={checkDrugHandler} className={isChecked ? style.checkActive : style.check}/>
      <Name name={name} rxcui={rxcui} />
      <Details rxcui={rxcui} />
    </div>
  );
};

export default Card;
