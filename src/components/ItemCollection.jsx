import React from 'react';
import PropTypes from 'prop-types';
import CardView from './CardView';

const ItemCollection = ({ items, renderCard }) => {
  return (
    <div className="grid grid-cols-2  gap-6">
      {items.map((item, index) =>
        renderCard ? renderCard(item, index) : (
          <CardView
            key={index}
            title={item.name}
            description={item.description}
            price={item.price}
            buttonText="Pick"
            onButtonClick={() => alert(`Picked ${item.name}`)} 
          />
        )
      )}
    </div>
  );
};

ItemCollection.propTypes = {
  items: PropTypes.array.isRequired,
  renderCard: PropTypes.func,
};

export default ItemCollection;
