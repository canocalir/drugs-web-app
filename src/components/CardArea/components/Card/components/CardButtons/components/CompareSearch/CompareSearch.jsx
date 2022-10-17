import style from './CompareSearch.module.scss'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DrugContext } from '../../../../../../../../context/drugContext';

const CompareSearch = ({rxcui, secondRxcui}) => {

  const urlInter =
      process.env.REACT_APP_DRUG_INTER_BASE_URL +
      `rxcuis=${rxcui}+${secondRxcui}`;

      const interData = useContext(DrugContext)
      const { setInteractionData } = interData

  const compareFetchHandler = async () => {
    const resInter = await fetch(urlInter);
    const dataInter = await resInter.json();
    setInteractionData(
      dataInter.fullInteractionTypeGroup[0].fullInteractionType[0]
        .interactionPair
    );
  };

  return (
    <Link
    onClick={compareFetchHandler}
    to={`/drug-interaction/${rxcui}+${secondRxcui}`}>
      <input type='submit' value='Get Data' className={style.searchButton}/>
    </Link>
  );
};

export default CompareSearch;
