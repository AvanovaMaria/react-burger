import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./IngredientCard.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { useDispatch, useSelector } from "react-redux";
import {OPEN_MODAL, CLOSE_MODAL} from '../../services/actions/modal';

function IngredientCard({ itemFood }) {
  const { _id, image, price, name } = itemFood;
  const [count, setCount] = useState();

  const dispatch = useDispatch();

  const openModalHandler = () => {
    dispatch({
      type: OPEN_MODAL,
      payload: itemFood
    })
  }

  const closeModalHandler = () => {
    dispatch({
      type: CLOSE_MODAL
    })
  }

  const { isOpen } = useSelector((state) => state.showModal);

  return (
    <article className={styles.BurgerCard} onClick={openModalHandler}>
      <Counter count={1} />
        <img src={image} alt="yummy bun" />
      <div className={styles.BurgerCount}>
        <p className="text text_type_digits-default">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.BurgerDescription}>
        <p className="text text_type_main-default">{name}</p>
      </div>
      {isOpen && (
        <>
          <Modal
            text={"Детали ингредиента"}
            isOpen={isOpen}
            onCancel={closeModalHandler}
          >
            <IngredientDetails ingredient={itemFood} />
          </Modal>
        </>
      )}
    </article>
  );
}

IngredientCard.propTypes = {
  itemFood: PropTypes.object.isRequired,
};

export default IngredientCard;
