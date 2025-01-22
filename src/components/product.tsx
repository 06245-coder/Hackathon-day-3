import React from "react";
import Image from "next/image"; // Import the Image component from next/image

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      code: "YS92301",
      price: "$42.00",
      image: "/whitechair.png", // Ensure these images are in the /public folder in Next.js
    },
    {
      id: 2,
      name: "Cantilever chair",
      code: "YS92301",
      price: "$42.00",
      image: "/2ndchair.png",
    },
    {
      id: 3,
      name: "Cantilever chair",
      code: "YS92301",
      price: "$42.00",
      image: "/3rdchair.png",
    },
    {
      id: 4,
      name: "Cantilever chair",
      code: "YS92301",
      price: "$42.00",
      image: "/4thchair.png",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`border rounded-lg p-4 ${index === 1 ? "shadow-lg bg-blue-100" : ""}`}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}  // Add a width for the image
                height={300} // Add a height for the image
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-medium text-center mt-4">{product.name}</h3>
              <p className="text-center text-gray-500">Code: {product.code}</p>
              <p className="text-center text-blue-500 font-semibold">{product.price}</p>
              {index === 1 && (
                <button className="mt-4 block mx-auto px-4 py-2 bg-green-500 text-white rounded-md">
                  View Details
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <div className="space-x-2">
            <span className="block w-3 h-3 bg-pink-500 rounded-full"></span>
            <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
            <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

