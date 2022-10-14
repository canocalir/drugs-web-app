import { useContext } from "react";
import { DrugContext } from "../../../../context/drugContext";

import style from "./Search.module.scss";

const Search = () => {
  const context = useContext(DrugContext);
  const { setSearchData, setUrlInputValue, urlInputValue } = context;
  
  const fetchDataHandler = async () => {
      const url = process.env.REACT_APP_DRUG_SEARCH_BASE_URL+`?name=${urlInputValue}`;
      const res = await fetch(url)
      const data = await res.json()
      setSearchData(data)
    }

  return (
    <div className={style.searchBox}>
      <input
        onChange={e => setUrlInputValue(e.target.value)}
        className={style.searchInput}
        type="text"
        placeholder="Start typing the name of your drug..."
      />
      <input type='submit' onClick={fetchDataHandler} className={style.drugButton} value='Find My Drug' />
    </div>
  );
};

export default Search;
