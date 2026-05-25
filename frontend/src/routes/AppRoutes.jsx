import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Predict from "../pages/Predict";
import Results from "../pages/Results";
import ChoiceFilling from "../pages/ChoiceFilling";

const AppRoutes = () => {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/predict" element={<Predict />} />

        <Route path="/results" element={<Results />} />

        <Route
          path="/choice-filling"
          element={<ChoiceFilling />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;