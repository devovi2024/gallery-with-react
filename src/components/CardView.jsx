import React from 'react';
import PropTypes from 'prop-types';

const CardView = ({ title, image, description, price, onButtonClick, category }) => {
  return (
    <div className="border sm:mt-10 rounded-lg shadow-md p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
      )}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-1">{description || 'No description'}</p>
      <p className="font-bold mb-2">{price ? `$${price}` : 'Price not listed'}</p>
      <p className="text-sm text-gray-500 mb-2">{category}</p>
      <button
        onClick={onButtonClick}
        className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200 shadow-sm"
      >
        🤍
      </button>
    </div>
  );
};

CardView.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onButtonClick: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default CardView;
