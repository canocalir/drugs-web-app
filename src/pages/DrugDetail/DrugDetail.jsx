import React, { useContext } from "react";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import { DrugContext } from "../../context/drugContext";
import style from "./DrugDetail.module.scss";

const DrugDetail = () => {
  const drugDetail = useContext(DrugContext);
  const { drugDetails } = drugDetail;
  return (
    <div className={style.detailsContainer}>
      <DetailsCard drugDetails={drugDetails} />
    </div>
  );
};

export default DrugDetail;
