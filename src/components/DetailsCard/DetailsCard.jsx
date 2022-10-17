import { Link } from "react-router-dom";
import style from "./DetailsCard.module.scss";

const DetailsCard = ({ drugDetails }) => {

  const { rxcui, name, isBranded } = drugDetails.rxcuiStatusHistory.attributes
  const { ingredientName } = drugDetails.rxcuiStatusHistory.derivedConcepts.ingredientConcept[0]

  return (
    <div className={style.detailsCard}>
      <Link className={style.closeButton} to={"/"}>
        X
      </Link>
      <div className={style.detailsText}>
      <p>Name: {name.match(/\[(.*?)]/)[1]}</p>
        <p>IsBranded: {isBranded}</p>
        <p>Active Ingredient: {ingredientName}</p>
        {console.log(ingredientName)}
        <p></p>
        </div>
    </div>
  );
};

export default DetailsCard;
