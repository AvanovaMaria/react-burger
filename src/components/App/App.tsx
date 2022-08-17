import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
//import { data } from "../../utils/data";
import { AppHeader } from "../AppHeader/AppHeader";
import BurgerIngredients from "..//BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "..//BurgerConstructor/BurgerConstructor";

function App() {
  const [productList, setProductList] = useState([]);
  const url = "https://norma.nomoreparties.space/api/ingredients";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("No more burgers, sorry!");
      })
      .then((data) => setProductList(data.data))
      .catch((er) => {
        alert(er.message);
      });
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <AppHeader />
      </div>
      <div className={styles.maincontent}>
        <BurgerIngredients ingredients={productList} />
        <BurgerConstructor ingredients={productList} />
      </div>
    </div>
  );
}

export default App;

