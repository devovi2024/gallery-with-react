import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CardView from './CardView';

const ItemCollection = ({ items, renderCard, itemsPerPage = 4 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="grid grid-cols-2 p-6 gap-6">
        {currentItems.map((item, index) =>
          renderCard ? renderCard(item, index) : (
            <CardView
              key={index}
              title={item.name}
              image={item.image}
              description={item.description}
              price={item.price}
              category={item.category}
              onButtonClick={() => alert(`Picked ${item.name}`)}
            />
          )
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={goToPrevious}
          disabled={currentPage === 1}
          className="px-4 py-2  rounded hover:bg-gray-400 disabled:opacity-50"
        >
          ◀️
        </button>
        <span className="self-center">Page {currentPage} of {totalPages}</span>
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2  rounded hover:bg-gray-400 disabled:opacity-50"
        >
          ▶️
        </button>
      </div>
    </>
  );
};

ItemCollection.propTypes = {
  items: PropTypes.array.isRequired,
  renderCard: PropTypes.func,
  itemsPerPage: PropTypes.number,
};

export default ItemCollection;
