import React from "react";
import Header from "@/components/header";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from 'next/image';  // Import Image component

const OrderCompleted = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header and Navbar */}
      <Header />
      <NavBar />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-5xl mx-auto py-16 px-6 md:px-0 text-center">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
            <span>Home</span> <span className="mx-1">/</span>
            <span>Pages</span> <span className="mx-1">/</span>
            <span className="text-pink-500 font-medium">Order Completed</span>
          </div>

          {/* Content */}
          <div className="bg-white shadow-md rounded-md p-8">
            <div className="flex justify-center mb-6">
              <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl">
                ✓
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Your Order Is Completed!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 hours. You will receive an email
              confirmation once your order is completed.
            </p>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-md font-medium hover:bg-pink-600 transition">
              Continue Shopping
            </button>
          </div>

          {/* Decorative Icons */}
          <div className="relative mt-12">
            <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full shadow">
                <Image
                  src="/clock.png"
                  alt="Clock Icon"
                  width={40}  // Set width
                  height={40}  // Set height
                />
              </div>
            </div>
            <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 flex items-center justify-center bg-pink-50 rounded-full shadow">
                <Image
                  src="/note.png"
                  alt="Note Icon"
                  width={40}  // Set width
                  height={40}  // Set height
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OrderCompleted;
