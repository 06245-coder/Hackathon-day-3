import React from "react";
import Image from "next/image";

import Upperheader from "@/components/header";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const Checkout = () => {
  const products = [
    { id: 1, name: "Ur dan consequat", size: "Small", price: "£32.50", img: "/info1.jpeg" },
    { id: 2, name: "Ur dan consequat", size: "Small", price: "£32.50", img: "/info2.jpeg" },
    { id: 3, name: "Ur dan consequat", size: "Small", price: "£32.50", img: "/info3.jpeg" },
    { id: 4, name: "Ur dan consequat", size: "Small", price: "£32.50", img: "/info4.jpeg" },
    { id: 5, name: "Ur dan consequat", size: "Small", price: "£32.50", img: "/info5.jpeg" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header and Navbar */}
      <Upperheader />
      <NavBar />

      <div className="max-w-7xl mx-auto py-8">
        <div className="bg-white p-8 shadow-md rounded-md">
          <h1 className="text-3xl font-bold mb-8 text-center">Hekto Demo</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact and Shipping Form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <form className="space-y-6">
                <input
                  type="email"
                  placeholder="Email or mobile phone number"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="offers" className="w-4 h-4" />
                  <label htmlFor="offers" className="text-sm">
                    Keep me up to date on news and exclusive offers
                  </label>
                </div>

                <h2 className="text-xl font-semibold mt-6 mb-4">Shipping Address</h2>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="p-3 border border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="p-3 border border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Bangladesh"
                    className="p-3 border border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="p-3 border border-gray-300 rounded-md"
                  />
                </div>

                <button
                  type="button"
                  className="w-full bg-pink-500 text-white py-3 rounded-md font-bold hover:bg-pink-600"
                >
                  Continue Shopping
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <div className="space-y-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <Image
                      src={product.img}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="object-cover rounded-md"
                    />
                    <div className="flex-1 ml-4">
                      <p className="font-medium">{product.name}</p>
                      <p className="text-gray-500 text-sm">Size: {product.size}</p>
                    </div>
                    <p className="font-medium">{product.price}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-lg font-semibold">
                  <p>Subtotal:</p>
                  <p>£129.50</p>
                </div>
                <div className="flex justify-between text-lg font-semibold mt-2">
                  <p>Total:</p>
                  <p>£525.00</p>
                </div>
              </div>

              <button className="w-full bg-green-500 text-white py-3 rounded-md font-bold mt-6 hover:bg-green-600">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Checkout;
