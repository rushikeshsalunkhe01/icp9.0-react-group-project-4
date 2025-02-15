import React from "react";
import Button from "./Button";

const TrainDetailsCard = ({ train }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-[400px] h-[470px] hover:scale-105 transition-transform border border-gray-300">
      <img
        src={train.image}
        alt={train.name}
        className="w-full h-[150px] object-cover rounded-lg mb-3"
      />
      <h2 className="text-xl font-semibold text-center py-2">{train.name}</h2>
      <p className="text-gray-600">Train No: {train.number}</p>
      <p>
        <strong>Type:</strong> {train.type}
      </p>
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

      {/* Centering the button */}
      <div className="flex justify-center pt-5">
        <Button text="Book Now" />
      </div>
    </div>
  );
};

export default TrainDetailsCard;