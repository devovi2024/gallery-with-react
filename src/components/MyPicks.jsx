import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MyPicks = ({ items, changeItems, deleteItem }) => {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [showCouponSection, setShowCouponSection] = useState(false); 

  useEffect(() => {
    const storedCouponCode = localStorage.getItem('quizCoupon');

    if (storedCouponCode) {
      console.log("Stored Coupon Code:", storedCouponCode); 
    }
  }, []);

  // Add one more item
  const addOne = (id) => {
    const newItems = items.map((item) =>
      item.id === id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
    changeItems(newItems);
  };

  // Take away one item
  const takeOne = (id) => {
    const newItems = items
      .map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    changeItems(newItems);
  };

  // Delete an item completely
  const removeToy = (id) => {
    deleteItem(id);
  };

  // Add up the cost of all items
  const total = items.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  // Apply coupon logic
  const applyCoupon = () => {
    if (!couponCode.trim()) {
      alert('Please enter a coupon code');
      return;
    }

    const storedCouponCode = localStorage.getItem('quizCoupon');

    console.log("Stored Coupon Code:", storedCouponCode); 
    console.log("Entered Coupon Code:", couponCode);    

    if (!storedCouponCode) {
      alert('No valid coupon available');
      setDiscount(0); 
      return;
    }

    if (couponCode === storedCouponCode) {
      console.log('Coupon Applied');
      setDiscount(20); 
    } else {
      alert('Invalid coupon code');
      setDiscount(0); 
    }
  };

  // Save coupon code to localStorage
  const saveCoupon = (code) => {
    localStorage.setItem('quizCoupon', code);
  };

  // Calculate the total after applying the discount
  const discountedTotal = total - (total * discount) / 100;

  return (
    <div className="p-4 bg-white border mt-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">My Picks</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <span className="font-semibold text-gray-800">
                {item.name} - ${item.price ? item.price.toFixed(2) : '0.00'} (
                <span className="text-green-600">{item.quantity || 1}</span>)
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => takeOne(item.id)}
                className="px-2 py-1 text-orange-500 hover:text-orange-700 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
                aria-label={`Decrease quantity of ${item.name}`}
              >
                −
              </button>
              <span className="text-sm text-gray-600 min-w-[1.5rem] text-center">{item.quantity || 1}</span>
              <button
                onClick={() => addOne(item.id)}
                className="px-2 py-1 text-green-500 hover:text-green-700 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-green-300"
                aria-label={`Increase quantity of ${item.name}`}
              >
                +
              </button>
              <button
                onClick={() => removeToy(item.id)}
                className="px-2 py-1 text-red-500 hover:text-red-700 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-red-300"
                aria-label={`Remove ${item.name}`}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Coupon Toggle Button */}
      <button
        onClick={() => setShowCouponSection((prev) => !prev)} 
        className="mt-4 p-2 px-4 "
      >
        {showCouponSection ? '﹀' : '🎁'}
      </button>

      {/* Coupon Code Section */}
      {showCouponSection && (
        <div className="mt-4">
          <label htmlFor="couponCode" className="text-sm font-semibold text-gray-700">Enter Coupon Code:</label>
          <input
            type="text"
            id="couponCode"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="p-2 border rounded mt-2 w-full"
            placeholder="Enter your coupon code"
          />
          <button
            onClick={applyCoupon}
            className="mt-2 p-2 px-4 bg-blue-600 text-white rounded"
          >
            Apply Coupon
          </button>
          <button
            onClick={() => saveCoupon(couponCode)}
            className="mt-2 p-2 px-4 flex items-center justify-center space-x-2 transition-transform duration-500 hover:scale-110 hover:shadow-xl hover:shadow-indigo-500"
          >
            <span className="text-xl animate-pulse">🚀</span>
          </button>
        </div>
      )}

      <div className="mt-4 text-right font-bold text-lg text-blue-700">
        Total: ${discount > 0 ? discountedTotal.toFixed(2) : total.toFixed(2)}
      </div>
    </div>
  );
};

MyPicks.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number,
      quantity: PropTypes.number,
      description: PropTypes.string,
    })
  ),
  changeItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default MyPicks;
