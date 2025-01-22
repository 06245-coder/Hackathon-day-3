 'use client'
 import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="flex space-x-8 bg-gray-100 py-4 px-6">
      <Link href="/" className="text-pink-500 font-medium hover:underline">
        Home
      </Link>

      {/* Dropdown for "Pages" */}
      <div
        className="relative"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <button className="hover:text-pink-500 font-medium">Pages ▼</button>
        {dropdownOpen && (
          <div className="absolute top-full mt-2 bg-white border rounded shadow-lg">
            <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
              About
            </Link>
            <Link href="/grid" className="block px-4 py-2 hover:bg-gray-100">
            Gallery
            </Link>
            <Link href="/info" className="block px-4 py-2 hover:bg-gray-100">
              Contatct Information
            </Link>
            <Link href='/shoppingcurt' className="block px-4 py-2 hover:bg-gray-100">
            ShoppingCart </Link>
            <Link href="/order" className="block px-4 py-2 hover:bg-gray-100">
            Checkout
            </Link>
          
          </div>
        )}
      </div>

      <Link href="/product" className="hover:text-pink-500 font-medium">
        Products
      </Link>
      <Link href="/blog" className="hover:text-pink-500 font-medium">
        Blog
      </Link>
      <Link href="/shoplist" className="hover:text-pink-500 font-medium">
        Shop
      </Link>
      <Link href="/contact" className="hover:text-pink-500 font-medium">
        Contact
      </Link>
      <Link href="/loginpage" className="hover:text-pink-500 font-medium">
        Login
      </Link>
    </nav>
  );
};

export default NavBar;
