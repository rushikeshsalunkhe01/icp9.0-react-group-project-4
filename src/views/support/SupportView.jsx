import React, { useState, useEffect } from "react";

const Support = () => {
  const [faqs, setFaqs] = useState([]);
  const [expanded, setExpanded] = useState(null); // To track the expanded FAQ

  // Load FAQs from localStorage
  useEffect(() => {
    const savedFaqs = JSON.parse(localStorage.getItem("faqs"));
    if (savedFaqs) {
      setFaqs(savedFaqs);
    } else {
      // Default FAQs if no saved data
      const defaultFaqs = [
        { question: "How to book a ticket?", answer: "You can book tickets through our website or mobile app." },
        { question: "How to check PNR status?", answer: "Use the PNR number on our website to check the status." },
        { question: "How to cancel a booking?", answer: "Bookings can be canceled through the 'My Bookings' section." }
      ];
      setFaqs(defaultFaqs);
      localStorage.setItem("faqs", JSON.stringify(defaultFaqs)); // Save FAQs to localStorage
    }
  }, []);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle FAQ visibility
  };

  const handleRefresh = () => {
    const savedFaqs = JSON.parse(localStorage.getItem("faqs"));
    if (savedFaqs) {
      setFaqs(savedFaqs);
    } else {
      const defaultFaqs = [
        { question: "How to book a ticket?", answer: "You can book tickets through our website or mobile app." },
        { question: "How to check PNR status?", answer: "Use the PNR number on our website to check the status." },
        { question: "How to cancel a booking?", answer: "Bookings can be canceled through the 'My Bookings' section." }
      ];
      setFaqs(defaultFaqs);
      localStorage.setItem("faqs", JSON.stringify(defaultFaqs)); // Save FAQs to localStorage
    }
  };

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
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleRefresh}
        >
          Refresh FAQs
        </button>
        <ul className="mt-2 text-gray-700">
          {faqs.map((faq, index) => (
            <li key={index} className="mt-4">
              <div
                className="cursor-pointer font-semibold text-green-600"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
              </div>
              {expanded === index && (
                <div className="mt-2 text-gray-800">{faq.answer}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Support;
