import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct import
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import PrnStatus from "./views/prntraker/prntraker"; // 
import TrainDetails from "./views/TrainSearch/TrainDetails";
import SupportView from "./views/support/SupportView";
import FAQs from "./views/support/FAQs"; // Imported but not used

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/pnr-status" element={<PrnStatus />} /> {/* PNR Status Page */}
        
        <Route path="/train-details" element={<TrainDetails />} /> {/* Train Details Page */}
        <Route path="/support" element={<SupportView />} /> {/* Support Page */}
        <Route path="/faqs" element={<FAQs />} /> {/* FAQs Page */}
      </Routes>
    </Router>
  );
};

export default App;
