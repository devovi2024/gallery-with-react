import React from 'react';
import CardView from './CardView';
import { itemArrayPropTypes } from '../propTypes';

const ItemCollection = ({ items, onPick, disabledItems }) => {
  return (
    <div>
      {items.map((item, index) => (
        <CardView 
          key={index} 
          item={item} 
          onPick={onPick} 
          disabled={disabledItems.has(item.id)} 
        />
      ))}
    </div>
  );
};

ItemCollection.propTypes = {
  items: itemArrayPropTypes,
};

export default ItemCollection;
