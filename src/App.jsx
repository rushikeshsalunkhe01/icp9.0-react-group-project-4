import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./views/About.jsx";
import Home from "./Home.jsx";
import TrainExplorer from "./views/TrainSearch/TrainExplorer";
import SupportView from "./views/support/SupportView";
import Booking from "./views/Booking/Booking";
import RegisterForm from "./views/auth/Register.jsx"; 
import LoginForm from "./views/auth/Login.jsx"; 
import ForgotAccDetails from "./views/auth/ForgateAccDetails.jsx";  {/* Forgot Account Details */}

import TrainDetails from "./views/TrainSearch/TrainDetails";
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
        <Route path="/support" element={<SupportView />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/ForgateAccDetails" element={<ForgotAccDetails />} /> {/* Route for Forgot Account */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/passenger-details" element={<PassengerForm />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/train-explorer/train-detail/:id" element={<TrainDetails />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
