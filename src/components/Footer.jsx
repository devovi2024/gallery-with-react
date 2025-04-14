import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer
      className="w-full  bottom-0 left-0 py-8 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white"
      style={{
        boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.2)', 
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold mb-4">AuctionGallery
          </h2>
          <p className="text-sm">Building a better future, one step at a time.</p>
        </div>

        {/* Links Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">How to works</a></li>
            <li><a href="#services" className="hover:text-gray-300">Auctions</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Categories</a></li>
          </ul>
        </div>

        



        {/* Social Media Icons */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center sm:justify-start space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="text-sm">
            <li>Email: contact@AuctionGallery
            .com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Brand St, City, Country</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2025 AuctionGallery
        . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
