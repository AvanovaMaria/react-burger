import React, { useEffect, useMemo } from "react";
import styles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from 'react-redux';
import { getItemFoods } from '../../services/actions/getIngredients';
import { IngredientsCategory } from "../IngredientsCategory/IngredientsCategory";



function BurgerIngredients() {
  const dispatch = useDispatch();

useEffect(
  () => {
    dispatch(getItemFoods());
  },
  [dispatch]
);

const {ingredients} = useSelector(
  state => state.data
)

  const [current, setCurrent] = React.useState("bun");

  const onTabClick = (tab) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({behavior: "smooth"});
  }

  const buns = useMemo(
    () => ingredients.filter((item) => item.type === "bun"),
    [ingredients]
  );

  const sauces = useMemo(
    () => ingredients.filter((item) => item.type === "sauce"),
    [ingredients]
  );

  const mains = useMemo(
    () => ingredients.filter((item) => item.type === "main"),
    [ingredients]
  );


  return (
    <div className={styles.BurgerIngredients}>
      <div className={styles.MainText}>
        <p className="text text_type_main-large">Соберите бургер</p>
      </div>
      <div className={styles.TabContainer}>
        <Tab value="bun" active={current === "bun"} onClick={onTabClick}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={onTabClick}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={onTabClick}>
          Начинки
        </Tab>
      </div>
      <div className={styles.Ingredients}>
      <IngredientsCategory
      title="Булки"
      titleId="bun"
      ingredients={buns}
       />
       <IngredientsCategory
      title="Соусы"
      titleId="sauce"
      ingredients={sauces}
       />
       <IngredientsCategory
      title="Начинки"
      titleId="main"
      ingredients={mains}
       />

      </div>
    </div>
  );
}

export default BurgerIngredients;
