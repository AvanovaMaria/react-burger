import React from "react";
import PropTypes from "prop-types";
import BunConstructorTop from "../BunConstructorTop/BunConstructorTop";
import MiddleConstr from "../MiddleConstr/MiddleConstr";
import BunContainerBottom from "../BunContainerBottom/BunContainerBottom";
import styles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const BurgerConstructor = ({ ingredients }) => {
  return (
    <div className={styles.BurgerConstructor}>
      <div className={styles.BunContainerTop}>
        {ingredients.map((elem, i) => {
          if (elem._id === "60666c42cc7b410027a1a9b1") {
            return <BunConstructorTop key={elem._id} itemFood={elem} />;
          }
        })}
      </div>
      <div className={styles.MiddleContainer}>
        {ingredients.map((elem, i) => {
          if (elem._id !== "60666c42cc7b410027a1a9b1" && elem._id !== "60666c42cc7b410027a1a9b2") {
            return <MiddleConstr key={elem._id} itemFood={elem} />;
          }
        })}
      </div>
      <div className={styles.BunContainerBottom}>
        {ingredients.map((elem, i) => {
          if (elem._id === "60666c42cc7b410027a1a9b1") {
            return <BunContainerBottom key={elem._id} itemFood={elem} />;
          }
        })}
      </div>
      <div className={styles.BurgerPrice}>
        <p className="text text_type_digits-medium">610</p>
        <CurrencyIcon type="primary" />
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};
