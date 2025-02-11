import './App.css';
import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
import { cardContext } from './itemContext';
import { useContext } from 'react';

function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
        <cardContext.Provider value={{total,setTotal}}>
        <div className='App'>
          <h2>Shopping Cart</h2>
            <Navbar />
            <Items />
        </div>
        </cardContext.Provider>
  );
}
export default App;
