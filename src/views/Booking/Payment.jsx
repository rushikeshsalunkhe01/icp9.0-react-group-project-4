import { useState } from "react";

export default function Payment(){
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    passengers: 1,
    class: "Economy",
    paymentMethod: "Credit Card",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed! Payment Successful! Details: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="w-150 mt-25 mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Train Booking</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">From</label>
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block font-medium">To</label>
          <input
            type="text"
            name="to"
            value={formData.to}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block font-medium">Passengers</label>
          <input
            type="number"
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            min="1"
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block font-medium">Class</label>
          <select
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First Class">First Class</option>
          </select>
        </div>
        <h3 className="text-xl font-bold mt-4">Payment Details</h3>
        <div>
          <label className="block font-medium">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>
        {formData.paymentMethod !== "PayPal" && (
          <>
            <div>
              <label className="block font-medium">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block font-medium">Expiry Date</label>
              <input
                type="text"
                name="cardExpiry"
                value={formData.cardExpiry}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block font-medium">CVC</label>
              <input
                type="text"
                name="cardCVC"
                value={formData.cardCVC}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
          </>
        )}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Confirm & Pay
        </button>
      </form>
    </div>
  );
}
