import React from "react";

const Header = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Full-screen background image with responsiveness */}
      <img
        src="https://i.ibb.co/HvRT8sG/Banner-min.jpg"
        alt="Header Image"
        className="w-full h-full object-cover"
      />
  
      {/* Content positioned in the center */}
      <div className="absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col justify-center items-center text-center text-white bg-gradient-to-t from-black via-black to-transparent">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Bid on Unique Items from <br /> Around the World
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mb-6 text-white">
          Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition duration-300">
          Explore Auctions
        </button>
      </div>
    </section>
  );
};

export default Header;
