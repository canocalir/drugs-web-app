import { useContext } from "react";
import { DrugContext } from "../../../../context/drugContext";

import style from "./Search.module.scss";

const Search = () => {
  const context = useContext(DrugContext);
  const { setSearchData, setUrlInputValue, urlInputValue, searchData } = context;
  
  const fetchDataHandler = async (e) => {
    e.preventDefault()
      const url = process.env.REACT_APP_DRUG_SEARCH_BASE_URL+`?name=${urlInputValue}`;
      const res = await fetch(url)
      const data = await res.json()
      setSearchData(data.drugGroup.conceptGroup)
    }

  return (
      <form className={style.searchBox}>
      <input
        onChange={e => setUrlInputValue(e.target.value)}
        className={style.searchInput}
        type="text"
        placeholder="Start typing the name of your drug..."
      />
      <input type='submit' onClick={fetchDataHandler} className={style.drugButton} value='Find My Drug' />
      {searchData === undefined ? <div className={style.error}>Please Enter a Valid Drug Name</div> : null}
      </form>
  );
};

export default Search;
