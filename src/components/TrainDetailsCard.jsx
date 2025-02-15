import React from "react";
import Button from "./Button";
import { Link } from "react-router"; 

const TrainDetailsCard = ({ train }) => {
  const { id, name, number, type, departure, arrival, duration, price, availability, image } = train;

  return (
    <Link to={`train-detail/${id}`}>
      <div className="bg-white shadow-md rounded-xl p-4 w-[400px] h-[470px] hover:scale-105 transition-transform border border-gray-300">
        <img 
            src={image} 
            alt={name} 
            className="w-full h-[150px] object-cover rounded-lg mb-3" />
        <h2 className="text-xl font-semibold text-center py-2">
            {name}
        </h2>
        <p className="text-gray-600">Train No: {number}</p>
        <p>
            <strong>Type:</strong> {type}
        </p>
        <p>
            <strong>Departure:</strong> {departure}
        </p>
        <p>
            <strong>Arrival:</strong> {arrival}
        </p>
        <p>
            <strong>Duration:</strong> {duration}
        </p>
        <p>
            <strong>Price:</strong> {price}
        </p>
        <p className={`font-semibold ${availability === "Available" ? "text-green-600" : availability === "Limited" ? "text-orange-600" : "text-red-600"}`}>
          {availability}
        </p>

        <div className="flex justify-center pt-5">
          <Button text="Book Now" />
        </div>
      </div>
    </Link>
  );
};

export default TrainDetailsCard;