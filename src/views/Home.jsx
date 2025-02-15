import React from "react";
import Coursel from "../components/Coursel"; 

const destinations = [
  {
    name: "New Delhi",
    state: "Delhi",
    properties: 4688,
    imageUrl: "path/to/newdelhi.jpg",
  },
  {
    name: "Mumbai",
    state: "Maharashtra",
    properties: 1766,
    imageUrl: "path/to/mumbai.jpg",
  },
  {
    name: "Goa",
    state: "Goa",
    properties: 4728,
    imageUrl: "path/to/goa.jpg",
  },
  {
    name: "Chennai",
    state: "Tamil Nadu",
    properties: 1401,
    imageUrl: "path/to/chennai.jpg",
  },
  {
    name: "Kolkata",
    state: "West Bengal",
    properties: 968,
    imageUrl: "path/to/kolkata.jpg",
  },
  {
    name: "Hyderabad",
    state: "Telangana",
    properties: 1527,
    imageUrl: "path/to/hyderabad.jpg",
  },
];

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={destination.imageUrl}
        alt={destination.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{destination.name}</h3>
        <p className="text-gray-600">{destination.state}</p>
        <p className="text-gray-600">{destination.properties} Properties</p>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">About Track and Go</h2>
        <p className="text-gray-700 mb-6">
          Launched in 2007, Track and Go is a technology company focused on empowering Indian travellers to plan, book, and manage their trips across rail, air, buses, and hotels. We assist travellers in making smarter travel decisions by leveraging artificial intelligence, machine learning, and data science-led innovations on our OTA platforms, comprising our websites and mobile applications.
        </p>
        <p className="text-gray-700 mb-6">
          Our vision is to become the most customer-centric travel company, offering the best customer experience to our users. Our focus on travel utility and customer experience for travellers in the 'next billion user' segment is driven by technology, cost-efficiency, and our culture of innovation. This has made us India's leading travel ecosystem for the 'next billion users'.
        </p>
        <p className="text-gray-700 mb-6">
          Join us on this journey to make travel planning and management easier, smarter, and more enjoyable.
        </p>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Coursel />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Popular Destinations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </div>
      </div>
      <AboutSection />
    </div>
  );
};

export default Home;

