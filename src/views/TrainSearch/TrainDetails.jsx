import React from "react";
import trainData from "../../config/trainData"
import TrainDetailsCard from "../../components/TrainDetailsCard";

const TrainDetails = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8 mt-20">Train Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainData.map((train) => (
          <TrainDetailsCard key={train.id} train={train} />
        ))}
      </div>
    </div>
  );
};

export default TrainDetails;