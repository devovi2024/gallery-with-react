import React from 'react';
import PropTypes from 'prop-types';

const MyPicks = ({ items, renderItem }) => {
  if (items.length === 0) {
    return <p className="text-gray-500">No items selected.</p>;
  }

  return (
    <ul className="list-disc pl-5">
      {items.map((item) => (
        <li key={item.id}>
          {renderItem ? renderItem(item) : item.name}
        </li>
      ))}
    </ul>
  );
};

MyPicks.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func,
};

export default MyPicks;
