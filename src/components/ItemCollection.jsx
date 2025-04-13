import React from 'react';
import CardView from './CardView';
import { itemArrayPropTypes } from '../propTypes';

const ItemCollection = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <CardView key={index} item={item} />
      ))}
    </div>
  );
};

ItemCollection.propTypes = {
  items: itemArrayPropTypes,
};

export default ItemCollection;
