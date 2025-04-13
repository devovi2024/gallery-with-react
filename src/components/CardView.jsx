import React from 'react';
import { itemPropTypes } from '../propTypes';

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '1rem',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  marginBottom: '1rem',
};

const CardView = ({ item, onPick, disabled }) => {
  return (
    <div style={cardStyle}>
      <h2>{item.name}</h2>
      <p>{item.description || "No description"}</p>
      <p>{item.price ? `$${item.price}` : "Price not listed"}</p>
      <button 
        onClick={() => onPick(item)} 
        disabled={disabled} 
        style={{ marginTop: '0.5rem', cursor: disabled ? 'not-allowed' : 'pointer' }}
      >
        {disabled ? "Already Picked" : "Pick"}
      </button>
    </div>
  );
};

CardView.propTypes = {
  item: itemPropTypes,
};

export default CardView;
