import "./App.css";
import { DrugProvider } from "../context/drugContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import DrugPrice from "../pages/DrugPrice/DrugPrice";
import DrugInteraction from "../pages/DrugInteraction/DrugInteraction";

function App() {
  return (
    <DrugProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="drug-prices" element={<DrugPrice />} />
          <Route path="drug-interaction" element={<DrugInteraction />} />
        </Routes>
      </BrowserRouter>
    </DrugProvider>
  );
}

export default App;
