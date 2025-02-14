import React from "react";

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Support</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        If you need any help or have any questions, feel free to reach out to our support team. 
        We are here to assist you with your train booking experience.
      </p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-green-600">Contact Us</h2>
        <p className="text-gray-700 mt-2">Email: support@trainbooking.com</p>
        <p className="text-gray-700">Phone: +91 12345 67890</p>
        <p className="text-gray-700">Working Hours: 9 AM - 6 PM (Mon-Sat)</p>
      </div>
      
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-green-600">FAQs</h2>
        <ul className="mt-2 text-gray-700">
          <li>• How to book a ticket?</li>
          <li>• How to check PNR status?</li>
          <li>• How to cancel a booking?</li>
        </ul>
      </div>
    </div>
  );
};

export default Support;