import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./IngredientCard.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";

function IngredientCard({ itemFood }) {
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
      {modalIsOpen && (
        <>
          <Modal
            text={"Детали ингредиента"}
            isOpen={openModalHandler}
            onCancel={closeModalHandler}
          >
            <IngredientDetails itemFood={itemFood} />
          </Modal>
        </>
      )}
    </div>
  );
}

IngredientCard.propTypes = {
  itemFood: PropTypes.object.isRequired,
};

export default IngredientCard;
