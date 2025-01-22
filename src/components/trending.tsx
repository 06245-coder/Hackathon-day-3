import Head from 'next/head';
import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js

interface Product {
  id: number;
  src: string;
  name: string;
  price: string;
  originalPrice?: string;
}

interface SidebarItem {
  id: number;
  name: string;
  price: string;
  src: string;
}

const TrendingProducts: React.FC = () => {
  const TrendingProducts: Product[] = [
    { id: 1, src: '/img1.png', name: 'Cantilever chair', price: '$90.00', originalPrice: '$120.00' },
    { id: 2, src: '/img2.png', name: 'Cantilever chair', price: '$90.00', originalPrice: '$120.00' },
    { id: 3, src: '/img3.png', name: 'Cantilever chair', price: '$90.00', originalPrice: '$120.00' },
    { id: 4, src: '/img4.png', name: 'Cantilever chair', price: '$90.00', originalPrice: '$120.00' },
    { id: 5, src: '/pic3.png', name: 'Cantilever chair', price: '$90.00', originalPrice: '$120.00' },
  ];

  const sidebarItems: SidebarItem[] = [
    { id: 1, name: 'Executive Seat chair', price: '$320.00', src: '/img7].png' },
    { id: 2, name: 'Executive Seat chair', price: '$320.00', src: '/img8.png' },
    { id: 3, name: 'Executive Seat chair', price: '$320.00', src: '/img9.png' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Trending Products</title>
        <meta name="description" content="Trending Products Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 py-8 md:px-16 lg:px-24">
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-8">Trending Products</h1>

        {/* Products Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {TrendingProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 border rounded-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md">
                <Image
                  src={product.src}
                  alt={product.name}
                  className="object-cover w-full h-full"
                  width={400}  // Add width for the image
                  height={400} // Add height for the image
                />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-gray-700">{product.name}</h2>
              {product.originalPrice && (
                <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
              )}
              <p className="text-lg font-bold text-gray-800">{product.price}</p>
            </div>
          ))}
        </div>

        {/* Promotions Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <div className="relative p-6 bg-pink-100 rounded-md">
            <h2 className="text-lg font-semibold text-gray-800">23% off in all products</h2>
            <a
              href="#"
              className="text-blue-600 underline font-medium mt-2 inline-block"
            >
              Shop Now
            </a>
            <Image
              src="/img6.png"
              alt="Promotion 1"
              className="absolute bottom-4 right-4 w-20 h-20 object-contain"
              width={80}   // Add width for the image
              height={80}  // Add height for the image
            />
          </div>

          <div className="relative p-6 bg-blue-100 rounded-md">
            <h2 className="text-lg font-semibold text-gray-800">23% off in all products</h2>
            <a
              href="#"
              className="text-blue-600 underline font-medium mt-2 inline-block"
            >
              View Collection
            </a>
            <Image
              src="/img5.png"
              alt="Promotion 2"
              className="absolute bottom-4 right-4 w-20 h-20 object-contain"
              width={80}   // Add width for the image
              height={80}  // Add height for the image
            />
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Executive Seat Chair</h2>
          <ul className="space-y-4">
            {sidebarItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-4 border rounded-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-gray-700 font-medium flex items-center">
                  <Image
                    src={item.src}
                    alt={item.name}
                    className="w-12 h-12 mr-4 object-contain rounded-md"
                    width={48}  // Add width for the image
                    height={48} // Add height for the image
                  />
                  {item.name}
                </span>
                <span className="text-lg font-bold text-gray-800">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default TrendingProducts;
