import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./views/About";
import Home from "./src/Home"; // Correct relative path

import TrainExplorer from "./views/TrainSearch/TrainExplorer";
import SupportView from "./views/support/SupportView";
import Booking from "./views/Booking/Booking";
import TrainDetails from "./views/TrainSearch/TrainDetails";
import PassengerForm from "./views/Booking/PassengerDetails";
import FAQs from "./views/support/FAQs"; 
import Payment from "./views/Booking/Payment";
import Login from "./views/Authentication/Login";
import CreateAccount from "./views/Authentication/CreateAccount";
import ForgotAccount from "./views/Authentication/ForgotAccount";

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
        <Route path="/train-explorer/train-detail/:id" element={<TrainDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<CreateAccount/>} />
        <Route path="/forgot-account" element={<ForgotAccount/>} />
        
        

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
