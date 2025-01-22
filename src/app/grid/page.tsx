import React from "react";
import Image from "next/image";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Upperheader from "@/components/header";

interface Product {
  id: number;
  name: string;
  price: string;
  discountPrice: string;
  imgSrc: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Vel eleifend animal",
    price: "$30.00",
    discountPrice: "$25.00",
    imgSrc: "/a.png", // Replace with real image URLs
  },
  {
    id: 2,
    name: "Ultrices condimentum imperdiet",
    price: "$40.00",
    discountPrice: "$35.00",
    imgSrc: "/b.png",
  },
  {
    id: 3,
    name: "Viverra suspendisse vel",
    price: "$28.00",
    discountPrice: "$22.00",
    imgSrc: "/c.png",
  },
  {
    id: 4,
    name: "Scel est fermentum",
    price: "$50.00",
    discountPrice: "$44.00",
    imgSrc: "/d.png",
  },
  {
    id: 5,
    name: "Faucibus pellentesque eu",
    price: "$18.00",
    discountPrice: "$15.00",
    imgSrc: "/e.png",
  },
  {
    id: 6,
    name: "Vestibulum magna laoreet",
    price: "$20.00",
    discountPrice: "$18.00",
    imgSrc: "/f.png",
    
  },
  {
    id: 7,
    name: "Sollicitudin erat nisi",
    price: "$35.00",
    discountPrice: "$30.00",
    imgSrc: "/g.png",
  },
  {
    id: 8,
    name: "Ultrices mauris elit",
    price: "$60.00",
    discountPrice: "$50.00",
    imgSrc: "/h.png",
  },
];

const Shop: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Reusable Header */}
      <Upperheader />
      {/* Reusable Navbar */}
      <NavBar />
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
<div className="mb-6 text-sm font-medium text-gray-800">
  <span className="text-black">Home</span>
  <span className="text-gray-400 mx-1">.</span>
  <span className="text-black">Pages</span>
  <span className="text-gray-400 mx-1">.</span>
  <span className="text-pink-500">Shop Grid Default</span>
</div>

        {/* Page Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-8">
          Ecommerce Accessories & Fashion Items
        </h1>
        {/* Filters */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="text-sm text-gray-600">
              About 120 results (0.34 seconds)
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <label htmlFor="perPage" className="text-sm text-gray-600">
                Per Page:
              </label>
              <input
                id="perPage"
                type="number"
                className="ml-2 border rounded-md px-2 py-1 text-sm"
                defaultValue={12}
              />
            </div>
            <div>
              <label htmlFor="sortBy" className="text-sm text-gray-600">
                Sort By:
              </label>
              <select
                id="sortBy"
                className="ml-2 border rounded-md px-2 py-1 text-sm"
                defaultValue="bestMatch"
              >
                <option value="bestMatch">Best Match</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
              </select>
            </div>
            <div>
              <label htmlFor="viewBy" className="text-sm text-gray-600">
                View:
              </label>
              <input
                id="viewBy"
                type="number"
                className="ml-2 border rounded-md px-2 py-1 text-sm"
                defaultValue={12}
              />
            </div>
          </div>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={product.imgSrc}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-sm font-medium text-gray-800 mb-2">
                  {product.name}
                </h2>
                <div className="flex justify-center items-center">
                  <span className="text-gray-500 line-through text-sm">
                    {product.price}
                  </span>
                  <span className="text-red-500 font-semibold text-md ml-2">
                    {product.discountPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* Reusable Footer */}
      <Footer />
    </div>
  );
};

export default Shop;
