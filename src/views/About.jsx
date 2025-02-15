import React from "react";

const About = () => {
  return (
    <div className="p-6 w-[80%] mx-auto text-justify mt-20">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">IRCTC</h2>
        <p>
          IRCTC stands for Indian Railway Catering and Tourism Corporation. It is a subsidiary of Indian Railways and is responsible for online ticket booking, catering, and tourism services. IRCTC was established in 1999 and is headquartered in New Delhi, India.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">IRCTC Next Generation e-Ticketing System</h2>
        <p>
          IRCTC's online ticketing platform allows users to book train tickets, check train availability, and track the status of their bookings. The platform also offers features like e-wallets, cancellation & refund options, and meal & accommodation booking on trains.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Catering & Tourism Services</h2>
        <p>
          IRCTC provides catering services to passengers via its e-catering services, where meals can be pre-booked and delivered to their seats. It also operates restaurants under "Food Plaza" and "Jan Aahar" at various railway stations. Additionally, IRCTC offers tour packages, hotel bookings, and luxury trains like the Maharaja Express and Buddhist Circuit Tourist Train.
        </p>
      </section>
    </div>
  );
};

export default About;