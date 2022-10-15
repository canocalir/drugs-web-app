import { createContext, useState } from "react";

const DrugContext = createContext();

const DrugProvider = ({ children }) => {
  const [searchData, setSearchData] = useState("");
  const [urlInputValue, setUrlInputValue] = useState("");
  const [modalOn, setModalOn] = useState("modalShow");
  const [drugDetails, setDrugDetails] = useState();
  const [selectedDrugs, setSelectedDrugs] = useState([])
console.log(selectedDrugs)
  return (
    <DrugContext.Provider
      value={{
        searchData,
        setSearchData,
        urlInputValue,
        setUrlInputValue,
        modalOn,
        setModalOn,
        drugDetails,
        setDrugDetails,
        selectedDrugs,
        setSelectedDrugs
      }}
    >
      {children}
    </DrugContext.Provider>
  );
};

export { DrugContext, DrugProvider };
