import React from "react";
import styles from "./MainCard.module.css";
import PropTypes from 'prop-types';
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function MainCard({ itemFood }) {
  return (
    <div className={styles.MainCard}>
      <div className={styles.MainImage}>
        <img src={itemFood.image} alt="yummy-yummy" />
      </div>
      <div className={styles.MainCount}>
        <p className="text text_type_digits-default">{itemFood.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.MainDescription}>
        <p className="text text_type_main-default">{itemFood.name}</p>
      </div>
    </div>
  );
}

MainCard.propTypes = {
  itemFood: PropTypes.object.isRequired,
};

export default MainCard;
