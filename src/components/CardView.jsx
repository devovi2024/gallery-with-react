import React from 'react';
import { itemPropTypes } from '../propTypes';

const CardView = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description || "No description"}</p>
      <p>{item.price ? `$${item.price}` : "Price not listed"}</p>
    </div>
  );
};

CardView.propTypes = {
  item: itemPropTypes,
};

export default CardView;
