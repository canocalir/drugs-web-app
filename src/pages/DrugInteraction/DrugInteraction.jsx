import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { DrugContext } from "../../context/drugContext";

const DrugInteraction = () => {

  const interData = useContext(DrugContext)
  const { interactionData } = interData

  return (
    <div>
      <Navbar />
      <h1>Drug Interaction</h1>
      {interactionData.map((inter) => (
        inter.description
      ))}
      <Footer />
    </div>
  );
};

export default DrugInteraction;
