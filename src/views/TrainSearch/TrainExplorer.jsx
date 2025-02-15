import React, { useState } from "react";
import trainData from "../../config/trainData";
import TrainDetailsCard from "../../components/TrainDetailsCard";

const TrainExplorer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("name"); // Default search by name
  const [trainType, setTrainType] = useState(""); // Filtering by train type

  // Function to filter trains based on search & filter
  const filteredTrains = trainData.filter((train) => {
    const matchesSearch =
      searchTerm === "" ||
      (searchBy === "name" && train.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (searchBy === "number" && train.number.includes(searchTerm));

    const matchesType = trainType === "" || train.type === trainType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8 mt-20">Train Explorer</h1>

      {/* Search & Filter Section */}
      <div className="flex w-full gap-6 flex-wrap justify-center">
        {/* Search Input */}
        <input
          type="text"
          placeholder={`Search by train ${searchBy}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded-md w-2/3 sm:w-1/3 border border-gray-400 focus:border-green-700 outline-none text-lg"
        />

        {/* Search By Dropdown */}
        <select
          className="p-2 rounded-md border border-gray-400"
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
        >
          <option value="name">Train Name</option>
          <option value="number">Train Number</option>
        </select>

        {/* Train Type Filter Dropdown */}
        <select
          className="p-2 rounded-md border border-gray-400"
          value={trainType}
          onChange={(e) => setTrainType(e.target.value)}
        >
          <option value="">All Train Types</option>
          <option value="Express">Express</option>
          <option value="Local">Local</option>
          <option value="Superfast">Superfast</option>
        </select>
      </div>

      {/* Train List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredTrains.length > 0 ? (
          filteredTrains.map((train) => <TrainDetailsCard key={train.id} train={train} />)
        ) : (
          <p className="text-gray-600 col-span-full">No trains found.</p>
        )}
      </div>
    </div>
  );
};

export default TrainExplorer;