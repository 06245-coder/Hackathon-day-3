import FurnitureBanner from "@/components/banner";
import ProductCard from "@/components/card";
import Footer from "@/components/footer";
import FurnitureGallery from "@/components/funituregallery";
import LeatestProducts from "@/components/gallery";
import Upperheader from "@/components/header";
import NavBar from "@/components/navbar";
import TrendingProducts from "@/components/trending";

import { sanityFetch } from "@/sanity/lib/client";

import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";

// Define the Product type
type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default async function statePage() {
  // Fetch products using sanityFetch
  const products: Product[] = await sanityFetch({ query: allProducts });

  return (
    <div>
      <Upperheader />
      <NavBar />
      <FurnitureBanner />
      <FurnitureGallery />
      <LeatestProducts />
      <TrendingProducts />

      {/* Products Section */}
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded-lg shadow-sm flex flex-col items-center"
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="w-60"
                width={240}
                height={500}
              />
              <h2 className="text-xl font-bold text-center">{product.name}</h2>
              <p className="text-center">{product.description}</p>
              <p className="text-center font-semibold">${product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <ProductCard />
      <Footer />
    </div>
  );
}
