import { useState } from "react";

export default function PassengerForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    idProof: "",
    seatPreference: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-xl font-semibold text-center mb-4">Passenger Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        <div>
          <label className="block text-gray-700">Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        <div>
          <label className="block text-gray-700">Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700">ID Proof</label>
          <input type="text" name="idProof" value={formData.idProof} onChange={handleChange} required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>

        <div>
          <label className="block text-gray-700">Seat Preference</label>
          <select name="seatPreference" value={formData.seatPreference} onChange={handleChange} required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">Select</option>
            <option value="Window">Window</option>
            <option value="Aisle">Aisle</option>
            <option value="No Preference">No Preference</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition">Submit</button>
      </form>
    </div>
  );
}
