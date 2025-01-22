import React from 'react';
import Image from 'next/image'; // Import Image component
import Upperheader from '@/components/header';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

const Checkout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Upperheader />
      <NavBar/>
      
      {/* Main Content */}
      <main className="flex-grow bg-gray-100 flex justify-center items-center">
        <div className="bg-white max-w-7xl w-full p-8 rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Hekto Demo</h1>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Section - Contact and Shipping Information */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email or mobile phone number"
                  className="w-full p-3 border rounded-md"
                />
                <div className="flex items-center">
                  <input type="checkbox" id="offers" className="mr-2" />
                  <label htmlFor="offers" className="text-sm">
                    Keep me up to date on news and exclusive offers
                  </label>
                </div>

                <h2 className="text-xl font-semibold mt-6 mb-4">Shipping Address</h2>

                <div className="flex gap-4">
                  <input type="text" placeholder="First name" className="w-1/2 p-3 border rounded-md" />
                  <input type="text" placeholder="Last name" className="w-1/2 p-3 border rounded-md" />
                </div>
                <input type="text" placeholder="Address" className="w-full p-3 border rounded-md" />
                <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full p-3 border rounded-md" />
                <div className="flex gap-4">
                  <input type="text" placeholder="City" className="w-1/3 p-3 border rounded-md" />
                  <input type="text" placeholder="Bangladesh" className="w-1/3 p-3 border rounded-md" />
                  <input type="text" placeholder="Postal Code" className="w-1/3 p-3 border rounded-md" />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-pink-500 text-white font-bold rounded-md mt-4"
                >
                  Continue Shopping
                </button>
              </form>
            </div>

            {/* Right Section - Order Summary */}
            <div className="lg:w-1/3">
              <div className="space-y-4">
                {/* Items List */}
                {[ 
                  { name: 'Ur dan consequat', size: 'Small', price: '$32.50', img: '/cart.jpeg' },
                  { name: 'Ur dan consequat', size: 'Small', price: '$32.50', img: '/cart1.jpeg' },
                  { name: 'Ur dan consequat', size: 'Small', price: '$32.50', img: '/cart2.jpeg' },
                  { name: 'Ur dan consequat', size: 'Small', price: '$32.50', img: '/cart3.jpeg' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4">
                    <Image
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                      width={64}  // Add width
                      height={64} // Add height
                    />
                    <div className="flex-1 ml-4">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-500 text-sm">Size: {item.size}</p>
                    </div>
                    <p className="font-semibold">{item.price}</p>
                  </div>
                ))}

                {/* Subtotal and Total */}
                <div className="mt-6">
                  <div className="flex justify-between text-lg font-semibold">
                    <p>Subtotal:</p>
                    <p>$129.50</p>
                  </div>
                  <div className="flex justify-between text-lg font-semibold mt-2">
                    <p>Total:</p>
                    <p>$525.00</p>
                  </div>
                </div>

                {/* Proceed Button */}
                <button className="w-full py-3 bg-green-500 text-white font-bold rounded-md mt-4">
                  Proceed to Checkout
                </button>
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

export default Checkout;
