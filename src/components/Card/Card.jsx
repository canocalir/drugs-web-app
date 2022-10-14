import React from "react";
import Name from "./components/Name/Name";
import style from "./Card.module.scss";
import Details from "./components/DetailsButton/DetailsButton";

const Card = ({ name, rxcui }) => {
  return (
    <div className={style.card}>
      <Name name={name} rxcui={rxcui} />
      <Details rxcui={rxcui} />
    </div>
  );
};

export default Card;
