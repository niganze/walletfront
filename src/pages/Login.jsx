import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LL from "../assets/login.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("https://walletbacked.onrender.com/api/users/login", {
        username,
        password,
      });

      if (response.status === 200) {
        // Handle successful login (e.g., save token to localStorage or context)
        const token = response.data.token;
        localStorage.setItem("authToken", token);

        // Navigate to the dashboard
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  const handleGoHome = () => {
    navigate("/");  // Navigate back to the home page
  };

  return (
    <div className="h-screen bg-[#F3F4F6] flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex w-full max-w-6xl h-full">
        {/* Left Side - Image/Art */}
        <div className="hidden md:block w-1/2 h-full">
          <img
            src={LL}
            alt="Login Art"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#0A1F95] mb-6 text-center">
            Welcome Back!
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Sign in to continue managing your Wallet Pro account.
          </p>

          {/* Back to Home Button */}
          <button
            onClick={handleGoHome}
            className="text-sm text-[#0A1F95] hover:underline mb-4 text-center"
          >
            Back to Home
          </button>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <p className="text-sm text-red-500">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-[#002C43] text-white py-3 rounded-md hover:bg-orange-500 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Don't have an account?{" "}
            <a href="#" className="text-[#0A1F95] hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
