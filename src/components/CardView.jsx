import React from 'react';
import PropTypes from 'prop-types';

const CardView = ({ title, description, price, buttonText, onButtonClick }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 w-full">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-1">{description || 'No description'}</p>
      <p className="font-bold mb-2">{price ? `$${price}` : 'Price not listed'}</p>
      <button
        onClick={onButtonClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {buttonText || 'Action'}
      </button>
    </div>
  );
};

CardView.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
};

export default CardView;
