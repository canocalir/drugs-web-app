import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import style from './DrugInteraction.module.scss'

import { DrugContext } from "../../context/drugContext";
import InteractionCard from "../../components/InteractionCard/InteractionCard";

const DrugInteraction = () => {

  const interData = useContext(DrugContext)
  const { interactionData } = interData

  return (
    <>
    <Navbar />
    <div className={style.interactionContainer}>
      <InteractionCard interactionData={interactionData}/>
    </div>
    <Footer />
    </>
  );
};

export default DrugInteraction;
