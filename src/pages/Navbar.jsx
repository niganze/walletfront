import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

        {/* Centered Navigation Links (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <Link
            to="/dashboard"
            className="hover:text-orange-500 transition-all py-2 px-4 rounded-md hover:bg-[#003F5F]"
          >
            Dashboard
          </Link>
          <Link
            to="/transactions"
            className="hover:text-orange-500 transition-all py-2 px-4 rounded-md hover:bg-[#003F5F]"
          >
            Transactions
          </Link>
          <Link
            to="/budget"
            className="hover:text-orange-500 transition-all py-2 px-4 rounded-md hover:bg-[#003F5F]"
          >
            Budget
          </Link>
          <Link
            to="/reports"
            className="hover:text-orange-500 transition-all py-2 px-4 rounded-md hover:bg-[#003F5F]"
          >
            Reports
          </Link>
        </div>

        {/* Profile and Login buttons on the right */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="hover:text-orange-500 transition-all py-2 px-4 rounded-md hover:bg-[#003F5F]"
          >
            Login
          </Link>
          <Link
            to="/profile"
            className="hover:text-orange-500 transition-all py-2 px-4 rounded-md hover:bg-[#003F5F]"
          >
            Profile
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
          <Link
            to="/dashboard"
            className="block hover:text-orange-500 transition-all py-2 px-4 rounded-md hover:bg-[#003F5F]"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Dashboard
          </Link>
          <Link
            to="/transactions"
            className="block hover:text-orange-500 transition-all py-2 px-4 rounded-md hover:bg-[#003F5F]"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Transactions
          </Link>
          <Link
            to="/budget"
            className="block hover:text-orange-500 transition-all py-2 px-4 rounded-md hover:bg-[#003F5F]"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Budget
          </Link>
          <Link
            to="/reports"
            className="block hover:text-orange-500 transition-all py-2 px-4 rounded-md hover:bg-[#003F5F]"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Reports
          </Link>
          <Link
            to="/profile"
            className="block hover:text-orange-500 transition-all py-2 px-4 rounded-md hover:bg-[#003F5F]"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Profile
          </Link>
          <Link
            to="/login"
            className="block hover:text-orange-500 transition-all py-2 px-4 rounded-md hover:bg-[#003F5F]"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
