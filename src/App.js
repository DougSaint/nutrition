import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Diet from "./pages/Diet";
import Nutrition from "./pages/Nutrition";
import NutrientsProvider from "./context/NutrientsProvider";
function App() {
  return (
    <NutrientsProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/calculate" element={<Diet />} />
          <Route path="/nutrition" element={<Nutrition />} />
        </Routes>
      </BrowserRouter>
    </NutrientsProvider>

  );
}

export default App;
