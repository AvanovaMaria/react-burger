import React from "react";
import PropTypes from "prop-types";
import styles from "./BurgerCard.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerCard({ itemFood }) {
  return (
    <div className={styles.BurgerCard}>
      <div className={styles.BurgerImage}>
        <Counter count={1} size="default" />
        <img src={itemFood.image} alt="yummy bun" />
      </div>
      <div className={styles.BurgerCount}>
        <p className="text text_type_digits-default">{itemFood.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.BurgerDescription}>
        <p className="text text_type_main-default">{itemFood.name}</p>
      </div>
    </div>
  );
}

BurgerCard.propTypes = {
  itemFood: PropTypes.object.isRequired,
};

export default BurgerCard;
// {itemFood}
