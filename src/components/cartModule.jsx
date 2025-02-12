import React from "react";
import styles from "../styles/cart.module.css";
import { useContext } from "react";
import { cardContext } from "../itemContext";
 function CartModule(){
    
const cardCon=useContext(cardContext);

    const changeCart=()=>{
        cardCon.setShowCart(!cardCon.showCart);
    }

    return (
        <div className={styles.cartModal}>
          <div className={styles.closeButton} onClick={changeCart} >
            Close
          </div>
          <div className={styles.clearButton}>
            Clear
          </div>
          <div className={styles.itemContainer}></div>
          <div className={styles.total}>
            <div className={styles.totalText}>Total</div>
            <div className={styles.totalPrice}>$Price</div>
          </div>
        </div> 
      );
    }

    export default CartModule;