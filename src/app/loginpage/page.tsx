import React from "react";
import Header from "@/components/header";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const MyAccount = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header and Navbar */}
      <Header />
      <NavBar />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-4xl mx-auto py-16 px-6 md:px-0 text-center">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
           
            <span className="text-pink-500 font-medium">My Account</span>
          </div>

          {/* Login Card */}
          <div className="bg-white shadow-md rounded-md p-8 max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Login</h1>
            <p className="text-gray-600 mb-6">
              Please log in using your account details below.
            </p>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium text-left"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium text-left"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="mb-6 text-right">
                <a href="#" className="text-pink-500 text-sm">
                  Forgot your password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded-md font-medium hover:bg-pink-600 transition"
              >
                Sign In
              </button>
            </form>

            <p className="text-gray-600 text-sm mt-6">
              Don’t have an Account?{" "}
              <a href="#" className="text-pink-500">
                Create Account
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MyAccount;
