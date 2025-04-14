import React, { useState } from 'react';
import { FiBell } from 'react-icons/fi'; 
import { FaUserCircle } from 'react-icons/fa'; 
import { FaBars } from 'react-icons/fa'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-black z-50 font-poppins">
      <div className="flex justify-between items-center px-5 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold animate-bounce-once">
          <span className="text-blue-500">Auction</span>
          <span className="text-yellow-400">Gallery</span>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="lg:hidden flex items-center">
          <FaBars
            className="text-2xl cursor-pointer text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
          />
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex gap-8">
          {['Home', 'Auctions', 'Categories', 'How to works'].map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-black font-medium text-base hover:text-blue-500 hover:underline transition-all duration-300 transform hover:scale-105"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Icons (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Notification Bell */}
          <div className="relative group">
            <FiBell className="text-blue-500 text-2xl cursor-pointer transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              2
            </span>
          </div>

          {/* Profile Picture */}
          <div className="group">
            <FaUserCircle className="text-gray-600 text-3xl cursor-pointer transition-transform duration-300 group-hover:scale-110" />
          </div>
        </div>
      </div>

      {/* Mobile Menu (only visible when isMenuOpen is true) */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white py-4`}>
        <div className="flex flex-col items-center gap-4">
          {['Home', 'Auctions', 'Categories', 'How to works'].map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-black font-medium text-lg hover:text-blue-500 hover:underline transition-all duration-300 transform hover:scale-105"
            >
              {link}
            </a>
          ))}
          {/* Mobile Icons */}
          <div className="flex items-center gap-4 mt-4">
            {/* Notification Bell */}
            <div className="relative group">
              <FiBell className="text-blue-500 text-2xl cursor-pointer transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                2
              </span>
            </div>

            {/* Profile Picture */}
            <div className="group">
              <FaUserCircle className="text-gray-600 text-3xl cursor-pointer transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
