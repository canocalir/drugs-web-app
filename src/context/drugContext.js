import { createContext, useState } from "react";

const DrugContext = createContext();

const DrugProvider = ({ children }) => {
    
    const [searchData, setSearchData] = useState('')
    const [urlInputValue, setUrlInputValue] = useState('')
  
    return(
        <DrugContext.Provider value={{
            searchData,
            setSearchData,
            urlInputValue,
            setUrlInputValue
        }}>
            {children}
        </DrugContext.Provider>
    )
}

export { DrugContext, DrugProvider}
