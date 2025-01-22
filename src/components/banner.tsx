import Image from "next/image"; // Import Image from Next.js

const FurnitureBanner = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100">
      {/* Left Section - Lamp Image */}
      <div className="relative md:w-1/3 flex justify-center mb-6 md:mb-0">
        <Image
          src="/light.png" // Replace this with the actual image path for the lamp
          alt="Lamp"
          className="object-cover"
          width={300} // Adjust width as needed
          height={300} // Adjust height as needed
        />
      </div>

      {/* Center Section - Text Content */}
      <div className="md:w-1/3 text-center md:text-left px-4">
        <p className="text-sm text-red-500 mb-2">Best Furniture For Your Castle...</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          New Furniture Collection Trends in 2020
        </h1>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas est adipiscing in pharetra non in justo.
        </p>
        <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600">
          Shop Now
        </button>
      </div>

      {/* Right Section - Chair Image */}
      <div className="relative md:w-1/3 flex justify-center">
        <Image
          src="/sofa.png" // Replace this with the actual image path for the chair
          alt="Chair"
          className="object-cover"
          width={300} // Adjust width as needed
          height={300} // Adjust height as needed
        />
        <div className="absolute top-0 right-0 bg-blue-500 text-white rounded-full px-4 py-2 text-lg font-bold">
          50% off
        </div>
      </div>

      {/* Decorative Circle */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-3/4 h-3/4 rounded-full bg-pink-200"></div>
    </section>
  );
};

export default FurnitureBanner;
