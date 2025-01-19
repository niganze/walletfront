import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiBarChart2, FiDollarSign, FiTag, FiSettings, FiLogOut } from "react-icons/fi";

function Dashsider() {
  return (
    <div className="bg-[#002C43] text-white h-screen w-64 shadow-lg flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center justify-center h-20 border-b border-white/20">
        <Link to="/" className="text-2xl font-bold">
          Wallet<span className="text-orange-500">Pro</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow mt-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center px-6 py-3 text-sm font-medium hover:bg-[#003F5F] transition"
            >
              <FiHome className="mr-3 text-lg" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/transactionss"
              className="flex items-center px-6 py-3 text-sm font-medium hover:bg-[#003F5F] transition"
            >
              <FiDollarSign className="mr-3 text-lg" />
              Transactions
            </Link>
          </li>
          <li>
            <Link
              to="/reports"
              className="flex items-center px-6 py-3 text-sm font-medium hover:bg-[#003F5F] transition"
            >
              <FiBarChart2 className="mr-3 text-lg" />
              Reports
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className="flex items-center px-6 py-3 text-sm font-medium hover:bg-[#003F5F] transition"
            >
              <FiTag className="mr-3 text-lg" />
              Categories
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center px-6 py-3 text-sm font-medium hover:bg-[#003F5F] transition"
            >
              <FiSettings className="mr-3 text-lg" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      {/* Logout Section */}
      <div className="mt-auto">
        <button
          className="flex items-center w-full px-6 py-3 text-sm font-medium text-white hover:bg-[#003F5F] transition"
        >
          <FiLogOut className="mr-3 text-lg" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashsider;
