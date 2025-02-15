import React from "react";
import { motion } from "framer-motion";

const PNRInput = ({ pnr, setPnr, fetchPNRStatus, loading, error }) => {
  return (
    <div className="mt-5">
      <motion.input
        type="text"
        value={pnr}
        onChange={(e) => setPnr(e.target.value)}
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
    </div>
  );
};

export default PNRInput;
