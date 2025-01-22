import React from 'react';
import Image from 'next/image'; // Import the Image component from next/image

const ProductCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-md bg-white rounded-lg shadow-lg overflow-hidden border-2 border-orange-500">
        <div className="relative">
          <div className="absolute inset-0 bg-pink-100 rounded-full -z-10"></div>
          <Image
            src="/img.png" // Replace with your image URL
            alt="Blue Sofa"
            width={500}  // Set an appropriate width
            height={300} // Set an appropriate height
            className="w-full" // Maintain the styling for full-width
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold text-blue-900">Unique Features Of Latest & Trending Products</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-2.5 h-2.5 bg-pink-500 rounded-full mt-1"></span>
              <p>All frames constructed with hardwood solids and laminates</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-1"></span>
              <p>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2.5 h-2.5 bg-teal-500 rounded-full mt-1"></span>
              <p>Arms, backs and seats are structurally reinforced</p>
            </li>
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
              Add To Cart
            </button>
            <div className="text-right">
              <p className="text-sm font-bold">888 Italian Sofa</p>
              <p className="text-lg font-extrabold text-blue-900">$320.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
