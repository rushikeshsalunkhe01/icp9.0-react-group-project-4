import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct import
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import TrainDetails from "./views/TrainSearch/TrainDetails";
import SupportView from "./views/support/SupportView";

// Import Support Page

const App = () => {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/train-details" element={<TrainDetails />} /> {/* Train Details Page */}
<<<<<<< HEAD
        <Route path="/support" element={<SupportView />} /> {/* Support Page */}
        </Routes>
=======
        <Route path="/support" element={<SupportView />} />{/* Support Page */}
        
        
      </Routes>
>>>>>>> 777efe80c3349c283bb8eb226cdb63f6b9a16ba0
    </Router>
    
  );
};

export default App;