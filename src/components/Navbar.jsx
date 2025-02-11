import React from "react";
import styles from "../styles/Total.module.css";
import { useContext } from "react";
import { cardContext } from "../itemContext";
function Navbar() {
  const useCardContext=useContext(cardContext);
  
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {useCardContext.total}</h1>
      <h1>Items: 0</h1>
    </div>
  );
}

export default Navbar;
