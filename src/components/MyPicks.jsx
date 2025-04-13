import React from 'react';
import { itemArrayPropTypes } from '../propTypes';

const MyPicks = ({ picks }) => {
  const totalPrice = picks.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Picked Items</h3>
      {picks.length === 0 ? (
        <p>No picks yet!</p>
      ) : (
        <>

          {picks.map((item, index) => (
            <div key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <img 
                src={item.image} 
                alt={item.name} 
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px', marginRight: '1rem' }} 
              />
              <div>
                <h4>{item.name}</h4>
                <p>{item.price ? `$${item.price}` : "Price not listed"}</p>
              </div>
            </div>
          ))}


          <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4> 
          </div>
        </>
      )}
    </div>
  );
};

MyPicks.propTypes = {
  picks: itemArrayPropTypes,  
};

export default MyPicks;
