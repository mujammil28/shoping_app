import React from "react";
import styles from "../styles/Total.module.css";
import { useContext } from "react";
import { cardContext } from "../itemContext";
import CartModule from "../components/cartModule"

function Navbar() {
  const useCardContext=useContext(cardContext);
  console.log(useCardContext.showCart)
  function clear(){
    useCardContext.setTotal(0);
    useCardContext.setItem(0);
  }

    const cart=()=>{
        useCardContext.setShowCart(!useCardContext.showCart);
    }
  
  console.log(useCardContext)

  return (
    <>
    <div className={styles.container}>
      <h1>Total : &#x20B9; {useCardContext.total}</h1>
      <h1>Items: {useCardContext.item}</h1>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton}  onClick={clear}>
          RESET 
        </button>
        <button className={styles.itemButton} onClick={cart} style={{marginLeft:20}}>
          CART
        </button>
      </div>
    </div>
      {useCardContext.showCart&& <CartModule />}
    </>
  );
}

export default Navbar;
