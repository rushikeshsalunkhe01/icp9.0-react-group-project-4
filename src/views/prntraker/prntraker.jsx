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
      <Navbar />
      <div className="relative max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md text-center mt-20">
        <TrainAnimation />
        <h2 className="text-2xl font-bold mb-4 text-blue-800">PNR Status</h2>
        <PNRInput pnr={pnr} setPnr={setPnr} fetchPNRStatus={fetchPNRStatus} loading={loading} error={error} />
        <PNRResult status={status} />
      </div>
    </>
  );
};

export default PNRStatus;
