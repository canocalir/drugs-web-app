import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { DrugContext } from "../../../../context/drugContext";

import style from "./Search.module.scss";

const Search = () => {
  const context = useContext(DrugContext);
  const { setSearchData, setUrlInputValue, urlInputValue, searchData } =
    context;
  const [isFetched, setIsFetched] = useState(false);

  const fetchDataHandler = async (e) => {
    e.preventDefault();
    try {
      const url =
        process.env.REACT_APP_DRUG_SEARCH_BASE_URL + `?name=${urlInputValue}`;
      const res = await fetch(url);
      const data = await res.json();
      setSearchData(data.drugGroup.conceptGroup[1].conceptProperties);
      data ? setIsFetched(true) : setIsFetched(false);
      setUrlInputValue("");
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
        title: "Enter a Drug name",
      });
    }
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
        onClick={fetchDataHandler}
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
