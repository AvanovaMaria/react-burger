import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

import { AppHeader } from "../AppHeader/AppHeader";
import BurgerIngredients from "..//BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "..//BurgerConstructor/BurgerConstructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";



function App() {
  
  const [totalPrice, setTotalPrice] = useState(0);

  
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <AppHeader />
      </div>
      <div className={styles.maincontent}>
      <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
            <BurgerConstructor />
            </DndProvider>
      </div>
    </div>
  );
}

export default App;
