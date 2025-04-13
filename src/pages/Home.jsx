import React, { useEffect, useState } from 'react';
import MyPicks from '../components/MyPicks';
import { fetchItems } from '../api/api';
import ItemCollection from '../components/ItemCollection';
import CardView from '../components/CardView';

const Home = () => {
  const [items, setItems] = useState([]);
  const [pickedItems, setPickedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch favorite items on mount
  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await fetchItems();
        setItems(data);
      } catch (err) {
        setError('Oops! Could not get items.');
      } finally {
        setLoading(false);
      }
    };
    getItems();
  }, []);

  // Pick an item
  const pickItem = (item) => {
    if (!pickedItems.find((p) => p.id === item.id)) {
      setPickedItems([...pickedItems, { ...item, quantity: 1 }]);
    }
  };

  // Update picked items
  const changePickedItems = (newItems) => {
    setPickedItems(newItems);
  };

  // Delete a picked item
  const deletePickedItem = (id) => {
    setPickedItems(pickedItems.filter((item) => item.id !== id));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600 text-lg">Loading items...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
<div className=" bg-gray-100 py-8 px-4 ">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Favorite Items</h1>

    <div className='flex flex-col lg:flex-row justify-between gap-10'>
  {/* Item Collection - 2/3 on large screens */}
  <div className="bg-amber-200 w-full lg:w-2/3">
    <ItemCollection
      items={items}
      renderCard={(item, index) => (
        <CardView
          key={index}
          title={item.name}
          description={item.description}
          price={item.price}
          buttonText="Pick"
          onButtonClick={() => pickItem(item)}
          className="w-full"
        />
      )}
    />
  </div>

  {/* Picks Section - 1/3 on large screens */}
  <div className="w-full lg:w-1/3">
    <MyPicks
      items={pickedItems}
      changeItems={changePickedItems}
      deleteItem={deletePickedItem}
    />
  </div>
</div>

  </div>
</div>

  );
};

export default Home;