import React from "react";
import styles from "./SauseCard.module.css";
import PropTypes from 'prop-types';
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function SauseCard({ itemFood }) {
  return (
    <div className={styles.SauseCard}>
      <div className={styles.SauseImage}>
        <img src={itemFood.image} alt="yummy-yummy" />
      </div>
      <div className={styles.SauseCount}>
        <p className="text text_type_digits-default">{itemFood.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.SauseDescription}>
        <p className="text text_type_main-default">{itemFood.name}</p>
      </div>
    </div>
  );
}

SauseCard.propTypes = {
  price: PropTypes.number,
  name: PropTypes.string
}

export default SauseCard;
