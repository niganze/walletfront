import React from "react";
import ERIC from '../assets/eric.jpg'
function DashNav() {
  return (
    <nav className="bg-[#002C43] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Search Bar / Quick Actions */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search Transactions..."
              className="bg-[#003F5F] text-white text-sm font-medium px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              className="bg-orange-500 hover:bg-orange-600 text-sm font-medium text-white px-4 py-2 rounded-md transition"
            >
              Quick Report
            </button>
          </div>

          {/* User Profile / Actions */}
          <div className="flex items-center space-x-4">
            
            <img
              src={ERIC}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
            />
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DashNav;
