
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router"; 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./views/About.jsx";
import Home from "./Home.jsx";
import TrainExplorer from "./views/TrainSearch/TrainExplorer";
import SupportView from "./views/support/SupportView";
import Booking from "./views/Booking/Booking";
// import RegisterForm from "./views/auth/Register"; 
// import ForgotAccDetails from "./views/auth/ForgateAccDetails"; 
import TrainDetails from "./views/TrainSearch/TrainDetails";
import PassengerForm from "./views/Booking/PassengerDetails";
import FAQs from "./views/support/FAQs"; 
import Payment from "./views/Booking/Payment";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/train-explorer" element={<TrainExplorer />} /> 
        <Route path="/support" element={<SupportView />} />
        {/* <Route path="/register" element={<RegisterForm />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/ForgateAccDetails" element={<ForgotAccDetails />} />  */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/passenger-details" element={<PassengerForm />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/train-explorer/train-detail/:id" element={<TrainDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/register" element={<CreateAccount/>} />
        <Route path="/forgot-account" element={<ForgotAccount/>} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
