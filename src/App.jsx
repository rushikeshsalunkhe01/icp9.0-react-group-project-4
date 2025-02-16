import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import PNRStatus from "./views/prntraker/prntraker";
import TrainDetails from "./views/TrainSearch/TrainDetails";
import SupportView from "./views/support/SupportView";
import FAQs from "./views/support/FAQs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pnr-status" element={<PNRStatus />} />
        <Route path="/train-details" element={<TrainDetails />} />
        <Route path="/support" element={<SupportView />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </Router>
  );
};

export default App;