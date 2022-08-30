import React, { useState, useEffect, useContext } from "react";
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
import Modal from "../Modal/Modal";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { chooseItemFoods } from '../../services/actions/chooseIngredients';
import { useDispatch, useSelector } from 'react-redux';
import {
  OPEN_ORDER_MODAL,
  CLOSE_ORDER_MODAL,
} from '../../services/actions/orderModal';
import {getOrderNumber} from '../../services/actions/orderModal';



export const BurgerConstructor = () => {
  const dispatch = useDispatch();
/*
  function openModalHandler() {
      dispatch({
        type: OPEN_ORDER_MODAL,
      })
  }
  */

  function closeModalHandler() {
    dispatch({
      type: CLOSE_ORDER_MODAL,
    })
  }

useEffect(
  () => {
    dispatch(chooseItemFoods());
  },
  [dispatch]
);

const {chosenIngredients} = useSelector(
  state => state.chosenData
)

const {isOpen, orderNumber} = useSelector(state => ({
  isOpen: state.showOrderModal.isOpen,
  orderNumber: state.showOrderModal.orderNumber
}));

  return (
    <div className={styles.BurgerConstructor}>
      <div className={styles.BunContainerTop}>
        {chosenIngredients.map((elem, i) => {
          if (elem._id === "60d3b41abdacab0026a733c6") {
            return <BunConstructorTop key={elem._id} itemFood={elem} />;
          }
        })}
      </div>
      <div className={styles.MiddleContainer}>
        {chosenIngredients.map((elem, i) => {
          if (
            elem._id !== "60d3b41abdacab0026a733c6" &&
            elem._id !== "60d3b41abdacab0026a733c7"
          ) {
            return <MiddleConstr key={elem._id} itemFood={elem} />;
          }
        })}
      </div>
      <div className={styles.BunContainerBottom}>
        {chosenIngredients.map((elem, i) => {
          if (elem._id === "60d3b41abdacab0026a733c6") {
            return <BunContainerBottom key={elem._id} itemFood={elem} />;
          }
        })}
      </div>
      
        <div className={styles.BurgerPrice}>
          <p className="text text_type_digits-medium">18730</p>
          <CurrencyIcon type="primary" />

          <div style={{ overflow: "hidden" }}>
            <Button
              type="primary"
              size="large"
              onClick={dispatch(getOrderNumber)}
            >
              Оформить заказ
            </Button>
          </div>

          {isOpen && (
            <Modal
              text={"Детали заказа"}
              isOpen={isOpen}
              onCancel={closeModalHandler}
            >
              <OrderDetails orderNumber={orderNumber} />
            </Modal>
          )}
        </div>
      
    </div>
  );
};

/*
fetch(`${url}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        ingredients: ["60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d2"],
      }),
    })
      .then(checkResponse)
      .catch((er) => {
        alert(er.message);
      });
      
      useEffect(() => {
    let total = 0;
    ingredients.map((item) => (total += item.price));
    setTotalPrice(total);
  }, [ingredients, setTotalPrice]);
*/