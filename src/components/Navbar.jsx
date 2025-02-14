import React, { useState } from "react";
import { Link } from "react-router";
import {ChevronDown} from "lucide-react"
import Logo from "../assets/images/logo.png"

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-green-800 text-white  shadow-lg text-xl bold fixed top-0 w-full z-1000">
      <div className="container mx-auto flex justify-between items-center px-6 h-20">
        <Link to="/" className="flex items-center pl-2">
            <img src={Logo} alt="Train Booking Logo" className="h-18" />
        </Link>

        <div className="hidden md:flex space-x-10 py-4">

          <div className="relative">
            <button
              onClick={() => toggleDropdown("trainSearch")}
              className="hover:text-yellow-300 focus:outline-none flex"
            >
              Train Search<ChevronDown className="mt-1"/>
            </button>
            {dropdown === "trainSearch" && (
              <div className="absolute bg-white text-black mt-5 w-40 shadow-lg rounded-lg z-1000">
                <Link to="/train-search" className="block px-4 py-2 hover:bg-gray-200">Search Trains</Link>
                <Link to="/train-filter" className="block px-4 py-2 hover:bg-gray-200">Filter Trains</Link>
                <Link to="/train-details" className="block px-4 py-2 hover:bg-gray-200">Train Details</Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => toggleDropdown("booking")}
              className="hover:text-yellow-300 focus:outline-none flex"
            >
              Booking<ChevronDown className="mt-1"/>
            </button>
            {dropdown === "booking" && (
              <div className="absolute bg-white text-black mt-5 w-48 shadow-lg rounded-lg z-1000">
                <Link to="/booking" className="block px-4 py-2 hover:bg-gray-200">Book Ticket</Link>
                <Link to="/passenger-details" className="block px-4 py-2 hover:bg-gray-200">Passenger Details</Link>
                <Link to="/payment" className="block px-4 py-2 hover:bg-gray-200">Payment</Link>
              </div>
            )}
          </div>

          <Link to="/pnr-status" className="hover:text-yellow-300">PNR Status</Link>
          <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>

          <div className="relative">
            <button
              onClick={() => toggleDropdown("admin")}
              className="hover:text-yellow-300 focus:outline-none flex"
            >
              Admin Panel<ChevronDown className="mt-1"/>
            </button>
            {dropdown === "admin" && (
              <div className="absolute bg-white text-black mt-5 w-44 shadow-lg rounded-lg z-1000">
                <Link to="/manage-users" className="block px-4 py-2 hover:bg-gray-200">Manage Users</Link>
                <Link to="/train-schedules" className="block px-4 py-2 hover:bg-gray-200">Train Schedules</Link>
              </div>
            )}
          </div>

          <Link to="/support" className="hover:text-yellow-300">Support</Link>
        </div>

        <div className="md:hidden">
          <button className="text-white text-xl">&#9776;</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;