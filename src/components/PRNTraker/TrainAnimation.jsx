/*import React from "react";
import { motion } from "framer-motion";


const TrainAnimation = () => {
  return (
    <motion.img
      src={trainGif}
      alt="Moving Train"
      className="mt-[170px]   w-32 h-auto absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      initial={{ x: -200 }}
      animate={{ x: 200 }}
      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
    />
  );
};

export default TrainAnimation;
import React from "react";
import { motion } from "framer-motion";
import trainGif from "./../../assets/images/prntrakerimg/Trainimg.png"; // Ensure correct path

const TrainAnimation = () => {
  return (
    <motion.div className="absolute top-7 left-0 right-0 flex justify-center">
      <motion.img
        src={trainGif}
        alt="Moving Train"
        className="w-30 md:w-30 lg:w-42" // Responsive width
        initial={{ x: "-100vw" }}
        animate={{ x: "100vw" }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      />
   
    </motion.div>
  
  );
};

export default TrainAnimation;

import React from "react";
import { motion } from "framer-motion";
import trainGif from "./../../assets/images/prntrakerimg/Trainimg.png"; // Ensure correct path

const TrainAnimation = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full">
     
      <motion.div
        className="flex justify-center"
        initial={{ x: "-100vw" }}
        animate={{ x: "100vw" }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      >
        <img src={trainGif} alt="Moving Train" className="w-32 md:w-40 lg:w-52" />
      </motion.div>

      
      <div className="w-full h-2  mt-1 mb-3.5"></div>
    </div>
  );
};

export default TrainAnimation;
*/
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
    <div className="relative min-h-screen flex flex-col pb-20">
      {/* Navbar */}
      <Navbar />
      <div className="mt-10"></div>

      {/* Centered Box with Full Shadow */}
      <div className="flex flex-col justify-center items-center flex-grow px-4">
        <div className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-lg text-center">
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
  );
};

export default PNRStatus;
