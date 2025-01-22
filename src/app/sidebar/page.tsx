import { FC } from "react";
import Image from "next/image"; // Import the Image component

import Upperheader from "@/components/header";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

interface Product {
  name: string;
  price: string;
  oldPrice: string;
  image: string;
  rating: number;
}

const products: Product[] = [
  {
    name: "Dictum morbi",
    price: "$26.00",
    oldPrice: "$30.00",
    image: "/aa.png",
    rating: 5,
  },
  {
    name: "Sodales sit",
    price: "$24.00",
    oldPrice: "$28.00",
    image: "/bb.png",
    rating: 4,
  },
  {
    name: "Nibh varius",
    price: "$22.00",
    oldPrice: "$25.00",
    image: "/cc.png",
    rating: 5,
  },
  {
    name: "Mauris quis",
    price: "$30.00",
    oldPrice: "$34.00",
    image: "/dd.png",
    rating: 3,
  },
];

const ShopList: FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Upperheader />
      <NavBar />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-blue-900">Shop Left Sidebar</h1>
        <p className="text-sm text-gray-600">
          Home . Pages . <span className="text-pink-500">Shop Left Sidebar</span>
        </p>

        <div className="flex mt-6 gap-6">
          {/* Sidebar */}
          <div className="w-1/4 bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Product Brand</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Coaster Furniture</li>
              <li>Fusion Dot High Fashion</li>
              <li>Unique Furniture Restor</li>
              <li>Dream Furniture Flipping</li>
              <li>Young Repurposed</li>
              <li>Green DIY Furniture</li>
            </ul>

            <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-4">Discount Offer</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>20% Cashback</li>
              <li>5% Cashback Offer</li>
              <li>25% Discount Offer</li>
            </ul>

            <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-4">Rating Item</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>5 &#9733;</li>
              <li>4 &#9733;</li>
              <li>3 &#9733;</li>
              <li>2 &#9733;</li>
              <li>1 &#9733;</li>
            </ul>

            <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-4">Categories</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Prestashop</li>
              <li>Magento</li>
              <li>Bigcommerce</li>
              <li>osCommerce</li>
              <li>Zen Cart</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="w-3/4">
            {/* Filters */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-800">Ecommerce Accessories & Fashion Items</h2>
              <div className="flex gap-4">
                <select className="border rounded px-3 py-2 text-gray-600">
                  <option>Per Page</option>
                  <option>4</option>
                  <option>8</option>
                  <option>12</option>
                </select>
                <select className="border rounded px-3 py-2 text-gray-600">
                  <option>Sort By</option>
                  <option>Best Match</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <select className="border rounded px-3 py-2 text-gray-600">
                  <option>View</option>
                  <option>List</option>
                  <option>Grid</option>
                </select>
              </div>
            </div>

            {/* Product List */}
            <div className="space-y-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex bg-white shadow rounded-lg p-4 items-center space-x-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={144} // Adjust width as per your layout
                    height={96} // Adjust height as per your layout
                    className="object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      {[...Array(product.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">&#9733;</span>
                      ))}
                      {[...Array(5 - product.rating)].map((_, i) => (
                        <span key={i} className="text-gray-300">&#9733;</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-800">{product.price}</p>
                    <p className="text-sm text-gray-400 line-through">{product.oldPrice}</p>
                    <div className="mt-2 flex space-x-2">
                      <button className="text-gray-600 flex items-center gap-1">
                        <span>&#9825;</span> Wishlist
                      </button>
                      <button className="text-gray-600 flex items-center gap-1">
                        <span>&#128722;</span> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopList;
