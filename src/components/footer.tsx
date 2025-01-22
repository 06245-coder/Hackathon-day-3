const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-600 py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Newsletter Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-black">Hekto</h2>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="p-2 w-full border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md">
                Sign Up
              </button>
            </div>
            <p className="text-sm">Contact Info</p>
            <p className="text-sm">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
   {/* Categories Section */}
   <div>
          <h3 className="text-lg font-semibold mb-3 text-black">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-500">Laptops & Computers</a></li>
            <li><a href="#" className="hover:text-pink-500">Cameras & Photography</a></li>
            <li><a href="#" className="hover:text-pink-500">Smart Phones & Tablets</a></li>
            <li><a href="#" className="hover:text-pink-500">Video Games & Consoles</a></li>
            <li><a href="#" className="hover:text-pink-500">Waterproof Headphones</a></li>
          </ul>
        </div>

        {/* Customer Care Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-black">Customer Care</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-500">My Account</a></li>
            <li><a href="#" className="hover:text-pink-500">Discount</a></li>
            <li><a href="#" className="hover:text-pink-500">Returns</a></li>
            <li><a href="#" className="hover:text-pink-500">Orders History</a></li>
            <li><a href="#" className="hover:text-pink-500">Order Tracking</a></li>
          </ul>
        </div>

        {/* Pages Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-black">Pages</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-500">Blog</a></li>
            <li><a href="#" className="hover:text-pink-500">Browse the Shop</a></li>
            <li><a href="#" className="hover:text-pink-500">Category</a></li>
            <li><a href="#" className="hover:text-pink-500">Pre-Built Pages</a></li>
            <li><a href="#" className="hover:text-pink-500">Visual Composer Elements</a></li>
            <li><a href="#" className="hover:text-pink-500">WooCommerce Pages</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;