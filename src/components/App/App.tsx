import React from "react";
import styles from "./App.module.css";
import { data } from "../../utils/data";
import { AppHeader } from "../AppHeader/AppHeader";
import BurgerIngredients from "..//BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "..//BurgerConstructor/BurgerConstructor";

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <AppHeader />
      </div>
      <div className={styles.maincontent}>
        <BurgerIngredients ingredients={data} />
        <BurgerConstructor ingredients={data} />
      </div>
    </div>
  );
}

export default App;
