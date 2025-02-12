import React from "react";
import styles from "../styles/cart.module.css";
import { useContext } from "react";
import { cardContext } from "../itemContext";
 function CartModule(){
    
const cardCon=useContext(cardContext);
    
    const changeCart=()=>{
        cardCon.setShowCart(!cardCon.showCart);
    }
    const clearCart=()=>{
        cardCon.setCart([]);
        cardCon.setTotal(0);
        cardCon.setItem(0)
    }

    return (
        <div className={styles.cartModal}>
          <div className={styles.closeButton} onClick={changeCart} >
            Close
          </div>
          <div className={styles.clearButton} onClick={clearCart}>
            Clear
          </div>
          <div className={styles.itemContainer}>

                { cardCon.cart.map((item)=>{

                        return (
                                <div className={styles.cartCard} key={item.id}>
                                <h1>{item.name}</h1>
                                <h3>X{item.qty}</h3>
                                <h3>{item.qty*item.price}</h3>
                                </div>
                        );

                })}

          </div>
          <div className={styles.total}>
            <div className={styles.totalText}> Items:{cardCon.cart.length}</div>
            <div className={styles.totalPrice}>$Price: {cardCon.total}</div>
          </div>
        </div> 
      );
    }

    export default CartModule;