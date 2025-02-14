import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-[#008000] text-white shadow-lg text-xl fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Train Booking Logo" className="h-16" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          
          {/* Train Search Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("trainSearch")}
              className="hover:text-[#FFA500] flex items-center"
            >
              Train Search <ChevronDown className="ml-1" />
            </button>
            {dropdown === "trainSearch" && (
              <div className="absolute bg-white text-black mt-5 w-40 shadow-lg rounded-lg">
                <Link to="/train-search" className="block px-4 py-2 hover:bg-gray-200">Search Trains</Link>
                <Link to="/train-filter" className="block px-4 py-2 hover:bg-gray-200">Filter Trains</Link>
                <Link to="/train-details" className="block px-4 py-2 hover:bg-gray-200">Train Details</Link>
              </div>
            )}
          </div>

          {/* Booking Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("booking")}
              className="hover:text-[#FFA500] flex items-center"
            >
              Booking <ChevronDown className="ml-1" />
            </button>
            {dropdown === "booking" && (
              <div className="absolute bg-white text-black mt-5 w-48 shadow-lg rounded-lg">
                <Link to="/booking" className="block px-4 py-2 hover:bg-gray-200">Book Ticket</Link>
                <Link to="/passenger-details" className="block px-4 py-2 hover:bg-gray-200">Passenger Details</Link>
                <Link to="/payment" className="block px-4 py-2 hover:bg-gray-200">Payment</Link>
              </div>
            )}
          </div>

          {/* PNR Status */}
          <Link to="/pnr-status" className="hover:text-[#FFA500]">PNR Status</Link>

          {/* Admin Panel Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("admin")}
              className="hover:text-[#FFA500] flex items-center"
            >
              Admin Panel <ChevronDown className="ml-1" />
            </button>
            {dropdown === "admin" && (
              <div className="absolute bg-white text-black mt-5 w-44 shadow-lg rounded-lg">
                <Link to="/manage-users" className="block px-4 py-2 hover:bg-gray-200">Manage Users</Link>
                <Link to="/train-schedules" className="block px-4 py-2 hover:bg-gray-200">Train Schedules</Link>
              </div>
            )}
          </div>

          {/* Support Page */}
          <Link to="/support" className="hover:text-[#FFA500]">Support</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenu(!mobileMenu)} className="text-white text-xl">
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-[#008000] text-white flex flex-col space-y-4 p-4">
          <Link to="/train-search" className="hover:text-[#FFA500]" onClick={() => setMobileMenu(false)}>Train Search</Link>
          <Link to="/booking" className="hover:text-[#FFA500]" onClick={() => setMobileMenu(false)}>Booking</Link>
          <Link to="/pnr-status" className="hover:text-[#FFA500]" onClick={() => setMobileMenu(false)}>PNR Status</Link>
          <Link to="/admin-panel" className="hover:text-[#FFA500]" onClick={() => setMobileMenu(false)}>Admin Panel</Link>
          <Link to="/support" className="hover:text-[#FFA500]" onClick={() => setMobileMenu(false)}>Support</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar