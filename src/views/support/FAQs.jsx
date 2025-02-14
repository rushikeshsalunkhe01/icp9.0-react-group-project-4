import React, { useState, useEffect } from "react";

const FAQs = () => {
  const [faqs, setFaqs] = useState([]);
  const [expanded, setExpanded] = useState(null); // To track the expanded FAQ
  const [showFAQs, setShowFAQs] = useState(false); // Flag to control visibility

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

  // Toggle visibility of FAQ component
  const toggleFAQs = () => setShowFAQs(!showFAQs);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold text-green-600">FAQs</h2>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={handleRefresh}
      >
        Refresh FAQs
      </button>
      <button
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md"
        onClick={toggleFAQs}
      >
        {showFAQs ? "Hide FAQs" : "Show FAQs"}
      </button>
      {showFAQs && (
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
      )}
    </div>
  );
};

export default FAQs;
