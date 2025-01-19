import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto py-16 px-6 lg:px-12">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#002C43] leading-snug">
            A Better Way To Make Payments
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Simplify your transactions with WalletApp, offering fast and secure payment solutions.
          </p>
          <Link
            to="/signup"
            className="mt-6 inline-block bg-orange-500 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-orange-600 transition-all"
          >
            Create Free Account
          </Link>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
          <img
            src="/path-to-your-image.jpg"
            alt="Hero Illustration"
            className="max-w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-[#002C43]">Our Best Services</h2>
          <p className="text-center text-gray-600 mt-2">
            Enjoy maximum services with WalletApp's digital solution to grow your business.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <img src="/path-to-send-money-icon.svg" alt="Send Money" className="h-12 w-12" />
              <h3 className="text-xl font-semibold text-orange-500 mt-4">Send Money</h3>
              <p className="text-gray-600 mt-2">
                Send money to any WalletApp user instantly by following simple instructions.
              </p>
            </div>
            {/* Service 2 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <img src="/path-to-payment-online-icon.svg" alt="Payment Online" className="h-12 w-12" />
              <h3 className="text-xl font-semibold text-orange-500 mt-4">Payment Online</h3>
              <p className="text-gray-600 mt-2">
                Pay online with WalletApp services, and your receiver will get instant notifications.
              </p>
            </div>
            {/* Service 3 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <img src="/path-to-receive-money-icon.svg" alt="Receive Money" className="h-12 w-12" />
              <h3 className="text-xl font-semibold text-orange-500 mt-4">Receive Money</h3>
              <p className="text-gray-600 mt-2">
                Receive money from any WalletApp user instantly once they pay for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
