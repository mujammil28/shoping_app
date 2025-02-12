import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useContext } from "react";
import { cardContext } from "../itemContext";

function ItemCard({ id,name, price }) {

  const {total,setTotal,item,setItem,cart,setCart}=useContext(cardContext);


  const handleAdd = () => {
       const index=cart.findIndex((item)=>item.id===id)
        if(index===-1){
          setCart([...cart,{id,name, price,qty:1}])
        }else{
          cart[index].qty++;
          setCart(cart);
          setTotal(total+price);
        }
        setItem(item+1)     
    setTotal(total+price);
    console.log(cart);
  };

  const handleRemove = () => {
      if(total>0){
    setTotal((prevTotal)=>prevTotal-price)
    setItem(item-1);
}
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
