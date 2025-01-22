import Footer from '@/components/footer';
import Upperheader from '@/components/header';
import NavBar from '@/components/navbar';
import React from 'react';
import Image from 'next/image';  // Import the Image component

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Section */}
      <Upperheader/>

      {/* Navbar Section */}
      <NavBar />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 flex-grow">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-center text-sm text-gray-500 mb-10">
          Home &gt; Pages &gt; Contact
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Information About Us</h2>
            <p className="text-sm text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              interdum nisl et nisi viverra volutpat. Etiam volutpat nisl eu
              ante facilisis tincidunt.
            </p>
            <div className="flex gap-3 mb-6">
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Way</h2>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><strong>Tel:</strong> +123-456-789</li>
              <li><strong>Support:</strong> support@domain.com</li>
              <li><strong>Address:</strong> 23 Main Street, London</li>
              <li><strong>Shipping:</strong> Free standard shipping available</li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              interdum nisl et nisi viverra volutpat.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              />
              <textarea
                placeholder="Type Your Message"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600"
              >
                Send Mail
              </button>
            </form>
          </div>
        </div>

        {/* Illustration */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-lg">
            <Image
              src="/ill.png"  // Use the correct image path
              alt="Illustration"
              width={600}  // Set the width for the image
              height={400}  // Set the height for the image
              className="w-full h-auto"  // Ensure the image is responsive
            />
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default Contact;
