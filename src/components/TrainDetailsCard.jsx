import React from "react";

const TrainDetailsCard = ({ train }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-[350px] h-[200px] hover:scale-105 transition-transform border border-gray-300">
      <h2 className="text-xl font-semibold">{train.name}</h2>
      <p className="text-gray-600">Train No: {train.number}</p>
      <p>
        <strong>Departure:</strong> {train.departure}
      </p>
      <p>
        <strong>Arrival:</strong> {train.arrival}
      </p>
      <p>
        <strong>Duration:</strong> {train.duration}
      </p>
      <p>
        <strong>Price:</strong> {train.price}
      </p>
      <p
        className={`font-semibold ${
          train.availability === "Available"
            ? "text-green-600"
            : train.availability === "Limited"
            ? "text-orange-600"
            : "text-red-600"
        }`}
      >
        {train.availability}
      </p>
    </div>
  );
};

export default TrainDetailsCard;