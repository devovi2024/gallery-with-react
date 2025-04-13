import React, { useEffect, useState } from 'react';
import { fetchItems } from '../api/api';
import ItemCollection from '../components/ItemCollection';
import MyPicks from '../components/MyPicks';
import CardView from '../components/CardView';

const Home = () => {
  const [items, setItems] = useState([]);
  const [pickedItems, setPickedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await fetchItems();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadItems();
  }, []);

  const handlePick = (item) => {
    if (!pickedItems.find(p => p.id === item.id)) {
      setPickedItems([...pickedItems, item]);
    }
  };

  const renderPickedItem = (item) => <div>{item.name}</div>; 

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">My Shop</h1>
      <ItemCollection
        items={items}
        renderCard={(item, index) => (
          <CardView
            key={index}
            title={item.name}
            description={item.description}
            price={item.price}
            buttonText="Pick"
            onButtonClick={() => handlePick(item)}
          />
        )}
      />

      <div className="mt-10 bg-gray-100 rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">My Picks</h2>
        <MyPicks items={pickedItems} renderItem={renderPickedItem} />
      </div>
    </div>
  );
};

export default Home;
