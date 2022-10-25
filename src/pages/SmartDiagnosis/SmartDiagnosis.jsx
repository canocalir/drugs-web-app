import React, { useEffect, useState } from "react";
import DiagOptions from "../../components/DiagOptions/DiagOptions";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import style from './SmartDiagnosis.module.scss'

const SmartDiagnosis = () => {
const [symptoms, setSymptoms] = useState([])
  const symptomDataFetch = async () => {
    const url = process.env.REACT_APP_SYMPTOM_URL
    const res = await fetch(url)
    const data = await res.json()
    setSymptoms(data)
  }

  useEffect(() => {
    symptomDataFetch()
  },[])

  return (
    <>
      <Navbar />
      <div className={style.diagnoseMain}>
      <DiagOptions symptoms={symptoms}/>
      </div>
      <Footer />
    </>
  );
};

export default SmartDiagnosis;
