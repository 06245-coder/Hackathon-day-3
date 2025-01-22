import Footer from "@/components/footer";
import Upperheader from "@/components/header";
import NavBar from "@/components/navbar";
import React from "react";
import Image from "next/image";  // Import the Image component

const SingleBlogPage: React.FC = () => {
  return (
    <div className="bg-purple-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <Upperheader/>
        <NavBar/>
        <h1 className="text-3xl font-bold text-purple-600 mb-4">Single Blog</h1>
        <div className="text-sm text-gray-500 mb-8">Home / Pages / Single Blog</div>

        {/* Blog Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Blog Content */}
          <div className="md:col-span-8">
            <Image
              src="/blog1.jpeg"  // Use the correct path for your image
              alt="Blog Image"
              width={800}  // Define the width of the image
              height={450}  // Define the height of the image
              className="w-full rounded-lg mb-6"
            />
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span>By: <a href="#" className="text-purple-600">Admin</a></span>
              <span>April 20, 2023</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Mauris at orci non vulputate diam tincidunt nec.
            </h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nulla eu sapien id urna
              vestibulum cursus. Condimentum urna molestie viverra id ac integer aliquam purus euismod mauris. Adipiscing
              posuere, convallis vulputate id lobortis blandit.
            </p>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet metus, nisi consequat integer enim. Sem
              consequat integer amet, consectetur. Magna sem consectetur integer enim cursus nisl viverra adipiscing.
              Nisi consequat integer amet, consectetur adipiscing elit id, volutpat volutpat ac.
            </p>
            <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-600 mb-4">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor sit amet, consectetur adipiscing
              elit.&quot;
            </blockquote>
          </div>

          {/* Sidebar Section */}
          <div className="md:col-span-4">
            {/* Search Box */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Nature (10)</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Travel (20)</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Fashion (15)</a></li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Posts</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Lorem ipsum dolor sit amet</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Consectetur adipiscing elit</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Sed do eiusmod tempor incididunt</a></li>
              </ul>
            </div>

            {/* Sale Products */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Sale Product</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Image
                    src="https://via.placeholder.com/50"
                    alt="Product"
                    width={50}  // Define the width of the image
                    height={50}  // Define the height of the image
                    className="w-12 h-12 rounded-lg mr-4"
                  />
                  <span className="text-gray-600">Product Name</span>
                </div>
                <div className="flex items-center">
                  <Image
                    src="https://via.placeholder.com/50"
                    alt="Product"
                    width={50}  // Define the width of the image
                    height={50}  // Define the height of the image
                    className="w-12 h-12 rounded-lg mr-4"
                  />
                  <span className="text-gray-600">Product Name</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default SingleBlogPage;
