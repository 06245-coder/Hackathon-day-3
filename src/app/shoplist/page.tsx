import { FC } from "react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Upperheader from "@/components/header";
import Image from 'next/image'; // Import Image component

interface Product {
  name: string;
  price: string;
  oldPrice: string;
  image: string;
  rating: number;
}

const products: Product[] = [
  {
    name: "Accumsan tincidunt",
    price: "$26.00",
    oldPrice: "$30.00",
    image: "/shop.png",
    rating: 5,
  },
  {
    name: "In nulla",
    price: "$24.00",
    oldPrice: "$28.00",
    image: "/shop2.png",
    rating: 4,
  },
  {
    name: "Vel sem",
    price: "$22.00",
    oldPrice: "$25.00",
    image: "/shop3.png",
    rating: 5,
  },
  {
    name: "Porttitor cum",
    price: "$30.00",
    oldPrice: "$34.00",
    image: "/shop4.png",
    rating: 3,
  },
  {
    name: "Nunc in",
    price: "$36.00",
    oldPrice: "$40.00",
    image: "/shop5.jpeg",
    rating: 4,
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
        <h1 className="text-2xl font-bold text-blue-900">Ecommerce Accessories & Fashion Items</h1>
        <p className="text-sm text-gray-600">Home . Pages . <span className="text-pink-500">Shop Grid Default</span></p>

        {/* Filters */}
        <div className="flex justify-between items-center mt-4">
          <div></div>
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
        <div className="mt-6 space-y-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex bg-white shadow rounded-lg p-4 items-center space-x-6 hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-36 h-24 object-cover rounded-md"
                width={144}  // Add width
                height={96}  // Add height
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

      <Footer />
    </div>
  );
};

export default ShopList;
