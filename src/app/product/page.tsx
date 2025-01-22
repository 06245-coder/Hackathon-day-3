import Footer from "@/components/footer";
import Upperheader from "@/components/header";
import NavBar from "@/components/navbar";
import React from "react";
import Image from 'next/image';  // Import Image component

const ProductDetails = () => {
  // Sample related products data
  const relatedProducts = [
    { id: 1, name: "New Fashion", price: "£80.00", rating: 4, img: "/pro1.jpeg" },
    { id: 2, name: "New Fashion", price: "£75.00", rating: 5, img: "/pro2.jpeg" },
    { id: 3, name: "New Classic", price: "£90.00", rating: 4, img: "/pro3.jpeg" },
    { id: 4, name: "New Elegant Look", price: "£85.00", rating: 4, img: "/pro4.jpeg" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header and Navbar */}
      <Upperheader />
      <NavBar />

      <div className="max-w-7xl mx-auto py-8">
        <div className="bg-white p-8 shadow-md rounded-md">
          <h1 className="text-3xl font-bold mb-6">Product Details</h1>

          {/* Product Info Section */}
          <div className="bg-gray-100 p-6 rounded-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Product Images */}
              <div className="md:col-span-1 flex flex-col space-y-2">
                <div className="flex-1">
                  <Image
                    src="/product4.jpeg"
                    alt="Main Product"
                    className="w-full h-[400px] object-cover rounded-md"
                    width={400}   // Add width
                    height={400}  // Add height
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <Image
                    src="/product1.jpeg"
                    alt="Thumb 1"
                    className="w-full h-24 object-cover rounded-md"
                    width={100}   // Add width
                    height={100}  // Add height
                  />
                  <Image
                    src="/product2.jpeg"
                    alt="Thumb 2"
                    className="w-full h-24 object-cover rounded-md"
                    width={100}   // Add width
                    height={100}  // Add height
                  />
                  <Image
                    src="/product3.jpeg"
                    alt="Thumb 3"
                    className="w-full h-24 object-cover rounded-md"
                    width={100}   // Add width
                    height={100}  // Add height
                  />
                  <Image
                    src="/product4.jpeg"
                    alt="Thumb 4"
                    className="w-full h-24 object-cover rounded-md"
                    width={100}   // Add width
                    height={100}  // Add height
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold mb-2">Playwood arm chair</h2>
                <p className="text-2xl text-pink-500 font-bold mb-4">£32.00</p>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id luctus urna. Maecenas ultrices
                  sapien quis sem viverra, non cursus risus auctor.
                </p>

                <div className="text-gray-700 mb-2">
                  <span className="font-medium">Category:</span> <span className="text-blue-500">Chair</span>
                </div>
                <div className="text-gray-700 mb-4">
                  <span className="font-medium">Tags:</span> <span className="text-blue-500">Furniture</span>
                </div>

                {/* Rating */}
                <div className="flex items-center">
                  <span className="text-yellow-400 text-xl">★ ★ ★ ★ ☆</span>
                  <span className="ml-2 text-gray-700">(4.0)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mb-12">
            <div className="border-b mb-4">
              <nav className="flex space-x-8">
                <button className="py-2 border-b-2 border-blue-500 text-blue-500 font-medium">Description</button>
                <button className="py-2 text-gray-500">Additional Info</button>
                <button className="py-2 text-gray-500">Reviews</button>
                <button className="py-2 text-gray-500">Video</button>
              </nav>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">More Images</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla odio nec venenatis viverra. Sed
                vitae convallis mi, in aliquet quam.
              </p>
            </div>
          </div>

          {/* Related Products Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Related Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <div key={product.id} className="text-center bg-white p-4 shadow rounded-md">
                  <Image
                    src={product.img}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                    width={200}   // Add width
                    height={200}  // Add height
                  />
                  <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
                  <p className="text-pink-500 font-bold mb-2">{product.price}</p>
                  <p className="text-yellow-400">★ {product.rating}.0</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetails;
