import style from "./CompareSearch.module.scss";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DrugContext } from "../../../../../../../../context/drugContext";
import Swal from "sweetalert2";

const CompareSearch = ({ rxcui, secondRxcui, name, secondName }) => {
  const [error, setError] = useState('')
  const urlInter =
    process.env.REACT_APP_DRUG_INTER_BASE_URL +
    `rxcuis=${rxcui}+${secondRxcui}`;

  const interData = useContext(DrugContext);
  const { setInteractionData } = interData;
const fName = name.toLowerCase()
const sName = secondName ? secondName.toLowerCase() : null
  const compareFetchHandler = async () => {
    setInteractionData([])
    try {
      const resInter = await fetch(urlInter);
      const dataInter = await resInter.json();
      setInteractionData(
        dataInter.fullInteractionTypeGroup[0].fullInteractionType[0]
          .interactionPair
      );
    } catch (error) {
      setError('')
      const Toast = Swal.mixin({
        toast: true,
        position: "top-right",
        iconColor: "white",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        background: "#f27474",
        color: "#fff",
      });
      await Toast.fire({
        icon: "error",
        title: "Enter correct Drug name",
      });
      setError(error)
    }
  };
  
  return (
    <Link
      onClick={compareFetchHandler}
      to={
        (secondRxcui && !fName.includes(sName)) &&error
          ? `/drug-interaction/${rxcui}+${secondRxcui}`
          : null
      }
    >
      <input type="submit" value="Get Data" className={style.searchButton} />
    </Link>
  );
};

export default CompareSearch;
