import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
//import { data } from "../../utils/data";
import { AppHeader } from "../AppHeader/AppHeader";
import BurgerIngredients from "..//BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "..//BurgerConstructor/BurgerConstructor";
import { url, checkResponse } from "../../utils/baseUrl";

import IngredientContext from "../../contexts/IngredientContext";
import TotalPriceContext from "../../contexts/TotalPriceContext";
import OrderStateContext from "../../contexts/IngredientContext";

function App() {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch(`${url}/ingredients`)
      .then(checkResponse)
      .then((data) => setData(data.data))
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
        <IngredientContext.Provider value={{ data, setData }}>
          <BurgerIngredients />
          <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
            <BurgerConstructor />
          </TotalPriceContext.Provider>
        </IngredientContext.Provider>
      </div>
    </div>
  );
}

export default App;
