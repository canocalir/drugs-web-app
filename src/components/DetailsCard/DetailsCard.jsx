import { Link } from "react-router-dom";
import style from "./DetailsCard.module.scss";

const DetailsCard = ({ drugDetails }) => {

  const { rxcui, name, isBranded } = drugDetails.attributes
  const { ingredientName } = drugDetails.derivedConcepts.ingredientConcept[0]
  
  return (
    <div className={style.detailsCard}>
      <Link className={style.closeButton} to={"/"}>
        X
      </Link>
      <div className={style.detailsText}>
      <p>Name: {name}</p>
        <p>IsBranded: {isBranded}</p>
        <p>Active Ingredient: {ingredientName}</p>
        <p>Rxcui Number: {rxcui}</p>
        </div>
    </div>
  );
};

export default DetailsCard;
