import React from "react";
import { motion } from "framer-motion";
import trainGif from "../assets/images/train.webp";

const TrainAnimation = () => {
  return (
    <motion.img
      src={trainGif}
      alt="Moving Train"
      className="w-32 h-auto absolute top-0 left-1/2 transform -translate-x-1/2"
      initial={{ x: -200 }}
      animate={{ x: 200 }}
      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
    />
  );
};

export default TrainAnimation;
