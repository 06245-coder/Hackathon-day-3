import Footer from "@/components/footer";
import Upperheader from "@/components/header";
import NavBar from "@/components/navbar";
import React from "react";
import Image from "next/image";  // Import the Image component

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-purple-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <Upperheader/>

      {/* Main Content */}
      <div className="flex-grow">
        <NavBar/> {/* Navbar section */}

        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Page Title Section */}
          <h1 className="text-3xl font-bold text-purple-600 mb-4">About Us</h1>

          {/* About Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-12">
            <Image
              src="/blog.jpeg"  // Use the correct path for your image
              alt="Business Meeting"
              width={570}  // Define the width of the image
              height={409}  // Define the height of the image
              className="rounded-tl-lg"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Know About Our Ecommerce Business, History
              </h2>
              <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque elit, 
                accumsan at mollis at, ultricies id metus. Phasellus eleifend.
              </p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                Contact Us
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-600 mb-2">Free Delivery</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-600 mb-2">100% Cash Back</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-600 mb-2">Quality Product</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-600 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Client Say!</h2>
            <p className="text-gray-600">Client testimonials would go here...</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default AboutUsPage;
