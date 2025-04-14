import React, { useEffect, useState } from 'react';
import '../style.css';
import MyPicks from '../components/MyPicks';
import { fetchItems } from '../api/api';
import ItemCollection from '../components/ItemCollection';
import CardView from '../components/CardView';
import QuizModalWrapper from '../components/QuizModalWrapper';
import BlogSlider from '../components/BlogSlider';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Home = () => {
  const [items, setItems] = useState([]);
  const [pickedItems, setPickedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const pickItem = (item) => {
    if (!pickedItems.find((p) => p.id === item.id)) {
      setPickedItems([...pickedItems, { ...item, quantity: 1 }]);
    }
  };

  const changePickedItems = (newItems) => {
    setPickedItems(newItems);
  };

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
    <div className="bg-gradient-to-br from-indigo-50 via-purple-100 to-indigo-200">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center sm:text-left">
          Favorite Items
        </h1>


      </div>

      <div>
      <div className="flex flex-col sm:flex-col lg:flex-row gap-10">
          {/* Items Section */}
          <div className="w-full lg:w-2/3">
            <ItemCollection
              items={items}
              renderCard={(item, index) => (
                <CardView
                  key={index}
                  title={item.name}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                  buttonText="Pick"
                  onButtonClick={() => pickItem(item)}
                  className="w-full"
                />
              )}
            />
          </div>

          {/* My Picks Section */}
          <div className="w-full lg:w-1/3">
            <MyPicks
              items={pickedItems}
              changeItems={changePickedItems}
              deleteItem={deletePickedItem}
            />
          </div>
        </div>
      </div>
      {/* Quiz Modal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <QuizModalWrapper />
      </div>

      {/* Blog Slider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <BlogSlider />
      </div>

      {/* Footer */}
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
