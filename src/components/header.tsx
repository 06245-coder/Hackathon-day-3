import React from 'react';

const Upperheader = () => {
  return (
    <div className="bg-purple-700 text-white flex justify-between items-center px-6 py-2">
      {/* Left Section */}
      <div className="flex gap-6 items-center">
        <div className="flex items-center gap-2">
          <i className="fas fa-envelope"></i>
          <span>nishkeanu@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="fas fa-phone"></i>
          <span>(123)-567-890</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex gap-6 items-center">
        <select className="bg-purple-700 text-white border-none focus:outline-none">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
        <select className="bg-purple-700 text-white border-none focus:outline-none">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
        </select>
        <button className="hover:underline">Login</button>
       
        <button className="hover:underline">Wishlist</button>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </div>
  );
};

export default Upperheader

