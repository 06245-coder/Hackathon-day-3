import React from "react";
import Image from "next/image"; // Import Image component from Next.js

const LeatestProducts = () => {
  const products = [
    {
      id: 1,
      name: "Comfort Handy Craft",
      price: "$42.00",
      originalPrice: "$65.00",
      image: "/pic1.png", // Replace with actual image paths
    },
    {
      id: 2,
      name: "Comfort Handy Craft",
      price: "$42.00",
      originalPrice: "$65.00",
      image: "/pic2.png",
    },
    {
      id: 3,
      name: "Comfort Handy Craft",
      price: "$42.00",
      originalPrice: "$65.00",
      image: "/pic3.png",
    },
    {
      id: 4,
      name: "Comfort Handy Craft",
      price: "$42.00",
      originalPrice: "$65.00",
      image: "/pic4.png",
    },
    {
      id: 5,
      name: "Comfort Handy Craft",
      price: "$42.00",
      originalPrice: "$65.00",
      image: "/pic5.png",
    },
    {
      id: 6,
      name: "Comfort Handy Craft",
      price: "$42.00",
      originalPrice: "$65.00",
      image: "/pic6.png",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Leatest Products</h2>
        <div className="text-center mb-4">
          <ul className="flex justify-center space-x-8">
            <li className="text-pink-500 font-medium cursor-pointer">New Arrival</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Best Seller</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Featured</li>
            <li className="text-gray-500 hover:text-black cursor-pointer">Special Offer</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 transition-transform transform hover:scale-105 relative"
            >
              {index === 1 && (
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-md">Sale</span>
              )}
              <div className="w-full h-40 mb-4 overflow-hidden rounded-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover"
                  width={160} // Add width for the image
                  height={160} // Add height for the image
                />
              </div>
              <h3 className="text-lg font-medium text-center mb-2">{product.name}</h3>
              <div className="flex justify-center items-center space-x-2">
                <span className="text-pink-500 font-semibold">{product.price}</span>
                <span className="line-through text-gray-400">{product.originalPrice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeatestProducts;
