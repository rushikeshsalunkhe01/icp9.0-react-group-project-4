import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import TrainDetails from "./views/TrainSearch/TrainDetails";
import Home from "./views/Home"

const App = () => {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/train-details" element={<TrainDetails />} />
      </Routes>
    </Router>
  );
};

export default App;