import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./BurgerCard.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import Backdrop from "../Backdrop/Backdrop";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";

function BurgerCard({ itemFood }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className={styles.BurgerCard}>
      <div className={styles.BurgerImage} onClick={openModalHandler}>
        <img src={itemFood.image} alt="yummy bun" />
      </div>
      <div className={styles.BurgerCount}>
        <p className="text text_type_digits-default">{itemFood.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.BurgerDescription}>
        <p className="text text_type_main-default">{itemFood.name}</p>
      </div>
      {modalIsOpen && <IngredientDetails onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

BurgerCard.propTypes = {
  itemFood: PropTypes.object.isRequired,
};

export default BurgerCard;
// {itemFood}
/*
{modalIsOpen && <IngredientDetails onCancel={closeModalHandler} />}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
*/
