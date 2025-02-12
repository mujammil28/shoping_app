import './App.css';
import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
import { cardContext } from './itemContext';

function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart,setShowCart]=useState(false);
  const [cart,setCart]=useState([]);
  return (
        <cardContext.Provider value={{total,setTotal,item,setItem,showCart,setShowCart,cart,setCart}}>
        <div className='App'>
          <h2>Shopping Cart</h2>
            <Navbar />
            <Items />
           
        </div>
        </cardContext.Provider>
  );
}
export default App;
