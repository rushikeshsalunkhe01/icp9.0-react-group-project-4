import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import trainGif from "./../../assets/images/prntrakerimg/train.webp";
import Navbar from "../../components/Navbar";

const passengers = [
  { name: "Amit Sharma", seat: "A1 - 12", status: "Confirmed" },
  { name: "Priya Verma", seat: "B2 - 45", status: "Waiting List" },
  { name: "Rohit Mehta", seat: "C3 - 20", status: "RAC" },
  { name: "Neha Gupta", seat: "D4 - 08", status: "Confirmed" },
  { name: "Vikram Singh", seat: "E5 - 33", status: "Waiting List" },
];

const trains = ["Shatabdi Express", "Rajdhani Express", "Duronto Express", "Garib Rath", "Tejas Express"];

const PNRStatus = () => {
  const [pnr, setPnr] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const lastPNR = localStorage.getItem("lastPNR");
    if (lastPNR) setPnr(lastPNR);
  }, []);

  const handlePNRChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPnr(value);
  };

  const fetchPNRStatus = async () => {
  
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-green-400 flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-md relative"
        >
          <motion.img 
            src={trainGif} 
            alt="Moving Train" 
            className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-32 h-auto"
            initial={{ x: -100 }} 
            animate={{ x: 100 }} 
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
          <h2 className="text-2xl font-bold mb-4 text-blue-900">PNR Status</h2>
          <motion.input
            type="text"
            value={pnr}
            onChange={handlePNRChange}
            placeholder="Enter 10-digit PNR Number"
            className="w-full p-3 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            whileFocus={{ scale: 1.05 }}
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <motion.button
            onClick={fetchPNRStatus}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-all duration-300"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Checking..." : "Check Status"}
          </motion.button>
          {status && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 p-4 bg-gray-100 rounded-lg border border-gray-200 shadow"
            >
              <p><strong>Passenger:</strong> {status.passengerName}</p>
              <p><strong>Train:</strong> {status.train}</p>
              <p><strong>Status:</strong> {status.status}</p>
              <p><strong>Seat:</strong> {status.seat}</p>
              <p><strong>Departure:</strong> {status.departure}</p>
              <p><strong>Arrival:</strong> {status.arrival}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default PNRStatus;
