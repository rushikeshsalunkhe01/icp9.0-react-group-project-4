import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./views/About";
import Home from "./views/Home";
import TrainExplorer from "./views/TrainSearch/TrainExplorer";
import SupportView from "./views/support/SupportView";
import Booking from "./views/Booking/Booking";
import PassengerForm from "./views/Booking/PassengerDetails";
import FAQs from "./views/support/FAQs"; 
import Payment from "./views/Booking/Payment";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/train-explorer" element={<TrainExplorer />} /> 
        <Route path="/support" element={<SupportView />} />{/* Support Page */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/passenger-details" element={<PassengerForm />} />
        <Route path="/faqs" element={<FAQs />} /> {/* FAQs Page */}
        <Route path="/payment" element={<Payment />} />

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
