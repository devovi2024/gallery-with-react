import { useEffect, useState } from "react";
import ItemCollection from "./components/ItemCollection";

function App() {
  const [items, setItems] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/dataset.json');
        const data = await response.json(); 
        setItems(data); 
        console.log(data);
      } catch (error) {
        console.error("Error fetching dataset", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <div>
        <ItemCollection items={items} /> 
      </div>
    </div>
  );
}

export default App;
