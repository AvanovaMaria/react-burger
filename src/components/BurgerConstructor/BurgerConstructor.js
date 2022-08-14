import React, { useState } from "react";
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
import Backdrop from "../Backdrop/Backdrop";
import { OrderDetails } from "../OrderDetails/OrderDetails";

export const BurgerConstructor = ({ ingredients }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className={styles.BurgerConstructor}>
      <div className={styles.BunContainerTop}>
        {ingredients.map((elem, i) => {
          if (elem._id === "60d3b41abdacab0026a733c6") {
            return <BunConstructorTop key={elem._id} itemFood={elem} />;
          }
        })}
      </div>
      <div className={styles.MiddleContainer}>
        {ingredients.map((elem, i) => {
          if (
            elem._id !== "60d3b41abdacab0026a733c6" &&
            elem._id !== "60d3b41abdacab0026a733c7"
          ) {
            return <MiddleConstr key={elem._id} itemFood={elem} />;
          }
        })}
      </div>
      <div className={styles.BunContainerBottom}>
        {ingredients.map((elem, i) => {
          if (elem._id === "60d3b41abdacab0026a733c6") {
            return <BunContainerBottom key={elem._id} itemFood={elem} />;
          }
        })}
      </div>
      <div className={styles.BurgerPrice}>
        <p className="text text_type_digits-medium">610</p>
        <CurrencyIcon type="primary" />
        <div style={{ overflow: "hidden" }}>
          <Button
            type="primary"
            size="large"
            onClick={(item) => openModalHandler(item._id)}
          >
            Оформить заказ
          </Button>
        </div>
        {modalIsOpen && <OrderDetails onCancel={closeModalHandler} />}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
    </div>
  );
};
