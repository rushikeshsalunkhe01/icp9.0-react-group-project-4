import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import TrainAnimation from "../../components/PRNTraker/TrainAnimation";
import PNRInput from "../../components/PRNTraker/PNRInput";
import PNRResult from "../../components/PRNTraker/PNRResult";
import { passengers, trains } from "../../data/data";

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
      {/* Navbar with Small Distance */}
      <Navbar />
      <div className="mt-10"></div>

      {/* Box with Top Shadow */}
      <div className="relative flex flex-col justify-center items-center min-h-screen px-4">
        <div className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-lg text-center relative">
          
          {/* Top Shadow Effect */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-gray-400 to-transparent rounded-t-lg"></div>

          <h2 className="text-2xl font-bold text-blue-800">PNR Status</h2>
          <PNRInput pnr={pnr} setPnr={setPnr} fetchPNRStatus={fetchPNRStatus} loading={loading} error={error} />
          <PNRResult status={status} />
        </div>
      </div>

      {/* Train Animation at Bottom with Track Line */}
      <div className="relative w-full mt-10">
        <TrainAnimation />
        <div className="w-full h-2 bg-gray-700 mt-1"></div> {/* Track Line */}
      </div>
    </>
  );
};

export default PNRStatus;
