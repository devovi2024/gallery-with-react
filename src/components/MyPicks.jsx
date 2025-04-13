import React from 'react';
import PropTypes from 'prop-types';

const MyPicks = ({ items, onDeleteItem }) => {
  if (items.length === 0) {
    return <p className="text-gray-500">No items selected.</p>;
  }

  const handleDelete = (id) => {
    const itemElement = document.getElementById(`item-${id}`);
    if (itemElement) {
      itemElement.remove(); 
    }

    onDeleteItem(id); 
  };

  const totalPrice = items.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <ul className="list-disc pl-5 space-y-2 mb-4">
        {items.map((item) => (
          <li key={item.id} id={`item-${item.id}`} className="flex items-center justify-between">
            <div>
              <span className="font-semibold">{item.name}</span> — 
              <span className="text-green-600 ml-1">
                ${typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}
              </span>
            </div>
            <button
              onClick={() => handleDelete(item.id)} 
              className="text-red-500 hover:text-red-700 font-semibold text-sm"
              aria-label={`Remove ${item.name}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="text-right font-bold text-lg text-blue-700">
        Total Price: ${totalPrice.toFixed(2)}
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
    })
  ).isRequired,
  onDeleteItem: PropTypes.func.isRequired, 
};

export default MyPicks;
