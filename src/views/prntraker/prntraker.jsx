import React, { useState, useEffect } from "react";
import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
import TrainAnimation from "./../../components/PRNTraker/TrainAnimation";
import { passengers, trains } from "./../../data/data";

const PNRStatus = () => {
  const [pnr, setPnr] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const lastPNR = localStorage.getItem("lastPNR");
    if (lastPNR) setPnr(lastPNR);
  }, []);

  const fetchPNRStatus = () => {
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
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <div className="mt-10 flex-grow flex flex-col justify-center items-center px-4">
        <div className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-lg text-center">
          <h2 className="text-2xl font-bold text-blue-800">PNR Status</h2>
          <input
            type="text"
            value={pnr}
            onChange={(e) => setPnr(e.target.value)}
            placeholder="Enter 10-digit PNR Number"
            className="w-full p-3 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            onClick={fetchPNRStatus}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Checking..." : "Check Status"}
          </button>
          {status && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg border border-gray-300">
              <p><strong>Passenger:</strong> {status.passenger}</p>
              <p><strong>Train:</strong> {status.train} ({status.type})</p>
              <p><strong>Status:</strong> {status.status}</p>
              <p><strong>Seat:</strong> {status.seat}</p>
              <p><strong>Platform:</strong> {status.platform}</p>
              <p><strong>Ticket Price:</strong> {status.price}</p>
            </div>
          )}
        </div>
      </div>
      <div className="relative mt-10">
        <TrainAnimation />
        <div className="w-full h-1 bg-gray-700 mt-1"></div> {/* Track Line */}
      </div>
      <Footer className="mt-7" />
    </div>
  );
};

export default PNRStatus;