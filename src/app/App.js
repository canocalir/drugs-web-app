import "./App.css";
import { DrugProvider } from "../context/drugContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import DrugInteraction from "../pages/DrugInteraction/DrugInteraction";
import DrugDetail from "../pages/DrugDetail/DrugDetail";
import SmartDiagnosis from "../pages/SmartDiagnosis/SmartDiagnosis";

function App() {
  return (
    <DrugProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="smart-diagnosis" element={<SmartDiagnosis/>} />
          <Route path="drug-interaction/:rxcui" element={<DrugInteraction />} />
          <Route path="drug-detail/:rxcui" element={<DrugDetail />} />
        </Routes>
      </BrowserRouter>
    </DrugProvider>
  );
}

export default App;
