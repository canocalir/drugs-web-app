import React, { useContext } from "react";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { DrugContext } from "../../context/drugContext";
import style from "./DrugDetail.module.scss";

const DrugDetail = () => {
  const drugDetail = useContext(DrugContext);
  const { drugDetails } = drugDetail;
  return (
    <>
    <Navbar />
    <div className={style.detailsContainer}>
      <DetailsCard drugDetails={drugDetails} />
    </div>
    <Footer/>
    </>
  );
};

export default DrugDetail;
