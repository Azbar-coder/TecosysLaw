import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "uixlibraries@gmail.com") {
      setError("We cannot find your email.");
    } else {
      setError("");
      // Handle form submission logic here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center space-x-6">
        <div className="hidden md:block w-1/2">
          <img
            src="https://via.placeholder.com/300x300" // Replace with actual image URL
            alt="Forgot Password"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
          <p className="text-gray-600 mb-6">
            Enter your email and we'll send you a link to reset your password.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Submit
            </button>
          </form>
          <div className="mt-4">
            <a href="#" className="text-blue-500 hover:underline">
              &larr; Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
