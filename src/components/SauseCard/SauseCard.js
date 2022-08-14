import React, { useState } from "react";
import styles from "./SauseCard.module.css";
import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Backdrop from "../Backdrop/Backdrop";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";

function SauseCard({ itemFood }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className={styles.SauseCard}>
      <div className={styles.SauseImage} onClick={openModalHandler}>
        <img src={itemFood.image} alt="yummy-yummy" />
      </div>
      <div className={styles.SauseCount}>
        <p className="text text_type_digits-default">{itemFood.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.SauseDescription}>
        <p className="text text_type_main-default">{itemFood.name}</p>
      </div>
      {modalIsOpen && <IngredientDetails onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

SauseCard.propTypes = {
  price: PropTypes.number,
  name: PropTypes.string,
};

export default SauseCard;
