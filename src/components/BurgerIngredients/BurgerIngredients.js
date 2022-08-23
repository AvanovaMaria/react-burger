import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import styles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../IngredientCard/IngredientCard";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import IngredientContext from "../../contexts/IngredientContext";

function BurgerIngredients() {
  const { data, setData } = useContext(IngredientContext);
  const [current, setCurrent] = React.useState("one");
  return (
    <div className={styles.BurgerIngredients}>
      <div className={styles.MainText}>
        <p className="text text_type_main-large">Соберите бургер</p>
      </div>
      <div className={styles.TabContainer} style={{ display: "flex" }}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={styles.Ingredients}>
        <p className={styles.HeadlineBun}>Булки</p>
        <div className={styles.IngredientCard}>
          {data.map((elem, i) => {
            if (elem.type === "bun") {
              return <IngredientCard key={elem._id} itemFood={elem} />;
            }
          })}
        </div>
        <p className={styles.HeadlineSause}>Соусы</p>
        <div className={styles.IngredientCard}>
          {data.map((elem, i) => {
            if (elem.type === "sauce") {
              return <IngredientCard key={elem._id} itemFood={elem} />;
            }
          })}
        </div>
        <p className={styles.HeadlineMain}>Начинки</p>
        <div className={styles.IngredientCard}>
          {data.map((elem, i) => {
            if (elem.type === "main") {
              return <IngredientCard key={elem._id} itemFood={elem} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default BurgerIngredients;
