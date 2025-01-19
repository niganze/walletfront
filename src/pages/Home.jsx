import React from "react";
import { FaUniversity, FaMobileAlt, FaWallet } from "react-icons/fa";
import PP from "../assets/payeric.png";

function Home() {
  return (
    <div className="bg-gray-50 animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-[#F8FAFC] py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#002C43] mb-6">
              A Better Way to Manage{" "}
              <span className="text-orange-500">Your Finances</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Keep track of all your transactions, set budgets, and visualize
              your financial data easily.
            </p>
            <button className="bg-orange-500 text-white py-3 px-6 rounded-md shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 p-4 flex justify-center items-center">
            <img
              src={PP}
              alt="Financial management illustration"
              className="w-full max-h-[400px] rounded-xl shadow-lg transform transition-transform duration-700 hover:scale-105 hover:rotate-1"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#002C43] text-center mb-8">
            Features Designed for Eric
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bank Accounts */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
              <FaUniversity className="text-orange-500 text-4xl mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-semibold text-[#002C43] mb-2">
                Bank Accounts
              </h3>
              <p className="text-gray-600">
                Track all transactions for your linked bank accounts in one
                place.
              </p>
            </div>
            {/* Mobile Money */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
              <FaMobileAlt className="text-orange-500 text-4xl mx-auto mb-4 animate-bounce delay-200" />
              <h3 className="text-xl font-semibold text-[#002C43] mb-2">
                Mobile Money
              </h3>
              <p className="text-gray-600">
                Monitor transactions on your mobile money accounts seamlessly.
              </p>
            </div>
            {/* Cash */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
              <FaWallet className="text-orange-500 text-4xl mx-auto mb-4 animate-bounce delay-400" />
              <h3 className="text-xl font-semibold text-[#002C43] mb-2">
                Cash
              </h3>
              <p className="text-gray-600">
                Manage cash transactions and ensure you're always on budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#002C43] text-center mb-8">
            Why Choose This App?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Track Transactions */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Track Transactions
              </h3>
              <p className="text-gray-600">
                Record and monitor all incoming and outgoing transactions,
                categorized by accounts.
              </p>
            </div>
            {/* Generate Reports */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Generate Reports
              </h3>
              <p className="text-gray-600">
                Create financial reports for specific time gaps, making analysis
                easier.
              </p>
            </div>
            {/* Set Budgets */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Set Budgets
              </h3>
              <p className="text-gray-600">
                Stay within limits by setting budgets and receiving
                notifications when exceeded.
              </p>
            </div>
            {/* Link Expenses */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Link Expenses
              </h3>
              <p className="text-gray-600">
                Categorize expenses into related categories and subcategories
                effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
