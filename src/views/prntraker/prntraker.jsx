import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import TrainAnimation from "../../components/PRNTraker/TrainAnimation";
import PNRInput from "../../components/PRNTraker/PNRInput";
import PNRResult from "../../components/PRNTraker/PNRResult";
import { passengers, trains } from "../../data/data";
import Footer from "../../components/Footer";
const PNRStatus = () => {
  const [pnr, setPnr] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const lastPNR = localStorage.getItem("lastPNR");
    if (lastPNR) setPnr(lastPNR);
  }, []);

  const fetchPNRStatus = async () => {
    if (!pnr || pnr.length !== 10) {
      setError("Please enter a valid 10-digit PNR number.");
      return;
    }
    setError("");
    setLoading(true);
    localStorage.setItem("lastPNR", pnr);

    setTimeout(() => {
      const randomPassenger = passengers[Math.floor(Math.random() * passengers.length)];
      const randomTrain = trains[Math.floor(Math.random() * trains.length)];

      setStatus({
        pnr,
        passenger: randomPassenger.name,
        train: randomTrain.name,
        type: randomTrain.type,
        status: randomPassenger.status,
        seat: randomPassenger.seat,
        price: randomTrain.price,
        platform: randomTrain.platform,
      });

      setLoading(false);
    }, 1500);
  };

  return (
    <>
    <div className="relative min-h-screen flex flex-col pb-20 ">
      {/* Navbar */}
      <Navbar />
      <div className="mt-10"></div>

      {/* Centered Box */}
      <div className="flex flex-col justify-center items-center flex-grow px-4">
        <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-lg text-center relative">
          
          {/* Top Shadow Effect */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-gray-400 to-transparent rounded-t-lg"></div>

          <h2 className="text-2xl font-bold text-blue-800">PNR Status</h2>
          <PNRInput pnr={pnr} setPnr={setPnr} fetchPNRStatus={fetchPNRStatus} loading={loading} error={error} />
          <PNRResult status={status} />
        </div>
      </div>

      {/* Train Below the Box */}
      <div className="mt-10">
        <TrainAnimation />
        <div className="w-full h-2 bg-gray-700 mt-1"></div> {/* Track Line */}
      </div>

      
    </div>
    
    </>
  );
};

export default PNRStatus;
