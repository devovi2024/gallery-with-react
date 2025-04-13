import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { items } = await import('../public/dataset.js'); 
        setItems(items); 
        console.log(items); 
      } catch (error) {
        console.error("Error fetching dataset", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
