import { useContext, useState } from "react";
import { DrugContext } from "../../../../context/drugContext";

import style from "./Search.module.scss";

const Search = () => {
  const context = useContext(DrugContext);
  const { setSearchData, setUrlInputValue, urlInputValue, searchData } =
    context;
  const [isFetched, setIsFetched] = useState(false);

  const fetchDataHandler = async (e) => {
    e.preventDefault();
    const url =
      process.env.REACT_APP_DRUG_SEARCH_BASE_URL + `?name=${urlInputValue}`;
    const res = await fetch(url);
    const data = await res.json();
    setSearchData(data.drugGroup.conceptGroup[1].conceptProperties);
    data ? setIsFetched(true) : setIsFetched(false);
    setUrlInputValue('')
  };

  return (
    <form className={style.searchBox}>
      <input
        onChange={(e) => setUrlInputValue(e.target.value)}
        className={style.searchInput}
        type="text"
        placeholder="Enter drug's name and click 'Find My Drug'..."
        value={urlInputValue}
      />
      <input
        type="submit"
        onClick={urlInputValue ? fetchDataHandler : null}
        className={style.drugButton}
        value="Find My Drug"
      />
      {!isFetched && searchData !== undefined && urlInputValue ? (
        <div className={style.error}>Please Enter a Valid Drug Name</div>
      ) : null}
    </form>
  );
};

export default Search;
