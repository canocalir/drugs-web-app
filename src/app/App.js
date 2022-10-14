import "./App.css";
import { DrugProvider } from "../context/drugContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import DrugPrice from "../pages/DrugPrice/DrugPrice";
import DrugInteraction from "../pages/DrugInteraction/DrugInteraction";
import DrugDetail from "../pages/DrugDetail/DrugDetail";

function App() {
  return (
    <DrugProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="drug-prices" element={<DrugPrice />} />
          <Route path="drug-interaction" element={<DrugInteraction />} />
          <Route path="drug-detail" element={<DrugDetail />} />
        </Routes>
      </BrowserRouter>
    </DrugProvider>
  );
}

export default App;
