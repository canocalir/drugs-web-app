import style from "./CompareSearch.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DrugContext } from "../../../../../../../../context/drugContext";
import Swal from "sweetalert2";

const CompareSearch = ({ rxcui, secondRxcui, name, secondName }) => {
  const urlInter =
    process.env.REACT_APP_DRUG_INTER_BASE_URL +
    `rxcuis=${rxcui}+${secondRxcui}`;

  const interData = useContext(DrugContext);
  const { setInteractionData } = interData;
  const fName = name.match(/\[(.*?)]/)[1];
  const sName = secondRxcui ? secondName.match(/\[(.*?)]/)[1] : null;

  const compareFetchHandler = async () => {
    try {
      const resInter = await fetch(urlInter);
      const dataInter = await resInter.json();
      setInteractionData(
        dataInter.fullInteractionTypeGroup[0].fullInteractionType[0]
          .interactionPair
      );
    } catch (error) {
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
    }
  };

  return (
    <Link
      onClick={compareFetchHandler}
      to={
        secondRxcui && fName !== sName
          ? `/drug-interaction/${rxcui}+${secondRxcui}`
          : null
      }
    >
      <input type="submit" value="Get Data" className={style.searchButton} />
    </Link>
  );
};

export default CompareSearch;
