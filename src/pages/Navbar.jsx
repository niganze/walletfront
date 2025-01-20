import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#002C43] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="text-2xl font-semibold">
          <Link to="/" className="hover:text-orange-500 transition-all">
            <span className="text-orange-500">Wallet</span>App
          </Link>
        </div>

        {/* Smooth Scrolling Text */}
        <div className="flex-1 flex justify-center items-center overflow-hidden">
          <div className="relative w-full">
            <p className="text-lg text-orange-500 whitespace-nowrap animate-marquee-smooth">
              My Wallet Eric 
            </p>
          </div>
        </div>

        {/* Login Button on the right */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-all"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#002C43] text-white space-y-4 py-4 px-6">
          <div className="text-center text-orange-500 text-lg animate-marquee-smooth">
            My Wallet Eric 
          </div>
          <Link
            to="/login"
            className="block bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
