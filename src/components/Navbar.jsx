import { useState } from "react";
import { Link } from "react-router-dom"; 
import { ChevronDown, Menu, X } from "lucide-react";
import { TramFront } from "lucide-react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-[#73db73] text-green-800 shadow-lg text-xl fixed top-0 w-full z-50 font-bold">
      <div className="container mx-auto flex justify-between items-center px-6 h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="flex font-bold">
            <TramFront size={40} />
            <p className="italic text-2xl">TrackGo</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8"> {/* Reduced space between items */}
          
          {/* Train Search Dropdown */}
          <Link to="/train-explorer" className="hover:text-[#FFA500]">Train Explorer</Link>

          {/* Booking Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("booking")}
              className="hover:text-[#FFA500] flex items-center"
            >
              Booking <ChevronDown className="ml-1" />
            </button>
            {dropdown === "booking" && (
              <div className="absolute bg-white text-green-800 mt-5 w-48 shadow-lg rounded-lg"> {/* Reduced mt-5 to mt-2 */}
                <Link to="/booking" className="block px-4 py-2 text-lg hover:bg-gray-200">Book Ticket</Link>
                <Link to="/passenger-details" className="block text-lg px-4 py-2 hover:bg-gray-200">Passenger Details</Link>
                <Link to="/payment" className="block px-4 py-2 text-lg hover:bg-gray-200">Payment</Link>
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
              <div className="absolute bg-white text-green-800 mt-5 w-44 shadow-lg rounded-lg"> {/* Reduced mt-5 to mt-2 */}
                <Link to="/manage-users" className="block px-4 py-2 text-lg hover:bg-gray-200">Manage Users</Link>
                <Link to="/train-schedules" className="block px-4 py-2 text-lg hover:bg-gray-200">Train Schedules</Link>
              </div>
            )}
          </div>

        {/* Login Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("login")}
            className="hover:text-[#FFA500] flex items-center"
          >
            Login <ChevronDown className="ml-1" />
          </button>
          {dropdown === "login" && (
            <div className="absolute bg-white text-green-800 mt-5 w-45 shadow-lg rounded-lg"> {/* Reduced mt-5 to mt-2 */}
              <Link to="/login" className="block px-4 py-2 text-lg hover:bg-gray-200">
                Login
              </Link>
              <Link to="/forgot-password" className="block text-lg px-4 py-2 hover:bg-gray-200">
                Forgot Password
              </Link>
              <Link to="/register" className="block px-4 py-2 text-lg hover:bg-gray-200">
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Support Dropdown */}
        <div className="relative">
            <button
              onClick={() => toggleDropdown("support")}
              className="hover:text-[#FFA500] flex items-center"
            >
              Support <ChevronDown className="ml-1" />
            </button>
            {dropdown === "support" && (
              <div className="absolute bg-white text-green-800 mt-5 w-28 shadow-lg rounded-lg"> {/* Reduced mt-5 to mt-2 */}
                <Link to="/support" className="block px-4 py-2 text-lg hover:bg-gray-200">Support</Link>
                <Link to="/faqs" className="block px-4 py-2 text-lg hover:bg-gray-200">FAQs</Link>
              </div>
            )}
          </div>
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
        <div className="md:hidden bg-[#73db73] text-green-800 flex flex-col space-y-7 p-4"> {/* Reduced space-y-4 to space-y-3 */}
          <Link to="/train-explorer" className="hover:text-[#FFA500]" onClick={() => setMobileMenu(false)}>
            Train Explorer
          </Link>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("booking")}
              className="hover:text-[#FFA500] flex items-center"
            >
              Booking <ChevronDown className="ml-1" />
            </button>
            {dropdown === "booking" && (
              <div className="absolute bg-white text-green-800 mt-5 w-48 shadow-lg rounded-lg"> {/* Reduced mt-5 to mt-2 */}
                <Link to="/booking" className="block px-4 py-2 text-lg hover:bg-gray-200">Book Ticket</Link>
                <Link to="/passenger-details" className="block text-lg px-4 py-2 hover:bg-gray-200">Passenger Details</Link>
                <Link to="/payment" className="block px-4 py-2 text-lg hover:bg-gray-200">Payment</Link>
              </div>
            )}
          </div>
          <Link to="/pnr-status" className="hover:text-[#FFA500]" onClick={() => setMobileMenu(false)}>
            PNR Status
          </Link>
          <Link to="/admin-panel" className="hover:text-[#FFA500]" onClick={() => setMobileMenu(false)}>
            Admin Panel
          </Link>

          {/* Mobile Support Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("supportMobile")}
              className="hover:text-[#FFA500] flex items-center"
            >
              Support <ChevronDown className="ml-1" />
            </button>
            {dropdown === "supportMobile" && (
              <div className="absolute bg-white text-green-800 mt-2 w-40 shadow-lg rounded-lg"> {/* Reduced mt-5 to mt-2 */}
                <Link to="/support" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenu(false)}>
                  Support
                </Link>
                <Link to="/faqs" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenu(false)}>
                  FAQs
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Login Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("loginMobile")}
              className="hover:text-[#FFA500] flex items-center"
            >
              Login <ChevronDown className="ml-1" />
            </button>
            {dropdown === "loginMobile" && (
              <div className="absolute bg-white text-green-800 mt-2 w-48 shadow-lg rounded-lg"> {/* Reduced mt-5 to mt-2 */}
                <Link to="/login" className="block px-4 py-2 text-lg hover:bg-gray-200" onClick={() => setMobileMenu(false)}>
                  Login
                </Link>
                <Link to="/forgot-password" className="block text-lg px-4 py-2 hover:bg-gray-200" onClick={() => setMobileMenu(false)}>
                  Forgot Password
                </Link>
                <Link to="/register" className="block px-4 py-2 text-lg hover:bg-gray-200" onClick={() => setMobileMenu(false)}>
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
