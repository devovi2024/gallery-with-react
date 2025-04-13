import React from 'react';
import PropTypes from 'prop-types';

const MyPicks = ({ items, changeItems, deleteItem }) => {
  // If no items are picked, show a message
  if (!items || items.length === 0) {
    return <p className="text-gray-500 text-center py-4">No items picked yet!</p>;
  }

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

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md max-w-2xl mx-auto">
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
      <div className="mt-4 text-right font-bold text-lg text-blue-700">
        Total: ${total.toFixed(2)}
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