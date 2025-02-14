import React from 'react';
import  { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    departure: "",
    destination: "",
    date: "",
    class: "economy",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details: ", formData);
    alert("Train ticket booked successfully!");
  }};

function Booking(){
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
    <h2 className="text-2xl font-bold mb-4 text-center">Train Booking Form</h2>
    <form onSubmit={Submit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="departure"
        value={formData.departure}
        onChange={handleChange}
        placeholder="Departure Station"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="destination"
        value={formData.destination}
        onChange={handleChange}
        placeholder="Destination Station"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <select
        name="class"
        value={formData.class}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="economy">Economy</option>
        <option value="business">Business</option>
        <option value="first-class">First Class</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Book Ticket
      </button>
    </form>
  </div>
);
};



export default Booking