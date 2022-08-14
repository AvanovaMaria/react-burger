import React, { useState } from "react";
import styles from "./MainCard.module.css";
import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Backdrop from "../Backdrop/Backdrop";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";

function MainCard({ itemFood }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className={styles.MainCard}>
      <div className={styles.MainImage} onClick={openModalHandler}>
        <img src={itemFood.image} alt="yummy-yummy" />
      </div>
      <div className={styles.MainCount}>
        <p className="text text_type_digits-default">{itemFood.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.MainDescription}>
        <p className="text text_type_main-default">{itemFood.name}</p>
      </div>
      {modalIsOpen && (
        <IngredientDetails
          image={itemFood.image}
          name={itemFood.name}
          calories={itemFood.calories}
          proteins={itemFood.proteins}
          fat={itemFood.fat}
          carbohydrates={itemFood.carbohydrates}
          onCancel={closeModalHandler}
        />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

MainCard.propTypes = {
  itemFood: PropTypes.object.isRequired,
};

export default MainCard;
