import React from "react";
import { motion } from "framer-motion";

const PNRResult = ({ status }) => {
  return (
    status && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4 p-4 bg-gray-100 rounded-lg border border-gray-300"
      >
        <p><strong>Passenger:</strong> {status.passenger}</p>
        <p><strong>Train:</strong> {status.train} ({status.type})</p>
        <p><strong>Status:</strong> {status.status}</p>
        <p><strong>Seat:</strong> {status.seat}</p>
        <p><strong>Platform:</strong> {status.platform}</p>
        <p><strong>Ticket Price:</strong> {status.price}</p>
      </motion.div>
    )
  );
};

export default PNRResult;
