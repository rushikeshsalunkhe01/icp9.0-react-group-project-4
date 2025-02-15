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
*/
import React from "react";
import { motion } from "framer-motion";
import trainGif from "./../../assets/images/prntrakerimg/Trainimg.png"; // Ensure correct path

const TrainAnimation = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full">
      {/* Moving Train */}
      <motion.div
        className="flex justify-center"
        initial={{ x: "-100vw" }}
        animate={{ x: "100vw" }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      >
        <img src={trainGif} alt="Moving Train" className="w-32 md:w-40 lg:w-52" />
      </motion.div>

      {/* Train Track */}
      <div className="w-full h-2 bg-gray-700 mt-1"></div>
    </div>
  );
};

export default TrainAnimation;

