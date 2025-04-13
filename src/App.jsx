import { useEffect, useState } from "react";
import ItemCollection from "./components/ItemCollection";
import MyPicks from "./components/MyPicks";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [items, setItems] = useState([]);
  const [picks, setPicks] = useState([]);
  const [disabledItems, setDisabledItems] = useState(new Set());  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/dataset.json');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching dataset", error);
      }
    };

    fetchData();
  }, []);

  const handlePick = (item) => {
    if (!picks.some(p => p.id === item.id)) {
      setPicks([...picks, item]);
      setDisabledItems(new Set(disabledItems.add(item.id)));  
      toast.success(`${item.name} has been picked!`, { position: "top-right" }); 
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h1>Gallery</h1>
      <ItemCollection items={items} onPick={handlePick} disabledItems={disabledItems} />
      <h2>My Picks</h2>
      <MyPicks picks={picks} />
      <ToastContainer />  
    </div>
  );
}

export default App;
