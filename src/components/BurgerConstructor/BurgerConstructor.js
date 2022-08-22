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
import IngredientContext from "../../contexts/IngredientContext";
import TotalPriceContext from "../../contexts/TotalPriceContext";
import OrderStateContext from "../../contexts/OrderStateContext";
import { url, checkResponse } from "../../utils/baseUrl";

export const BurgerConstructor = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { data, setData } = useContext(IngredientContext);
  const { totalPrice, setTotalPrice } = useContext(TotalPriceContext);
  const [orderNumber, setOrderNumber] = useState(null);

  function openModalHandler() {
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
    setOrderNumber(orderNumber + 1); // посчитать номер заказа
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    let total = 0;
    data.map((item) => (total += item.price));
    setTotalPrice(total);
  }, [data, setTotalPrice]);

  return (
    <div className={styles.BurgerConstructor}>
      <div className={styles.BunContainerTop}>
        {data.map((elem, i) => {
          if (elem._id === "60d3b41abdacab0026a733c6") {
            return <BunConstructorTop key={elem._id} itemFood={elem} />;
          }
        })}
      </div>
      <div className={styles.MiddleContainer}>
        {data.map((elem, i) => {
          if (
            elem._id !== "60d3b41abdacab0026a733c6" &&
            elem._id !== "60d3b41abdacab0026a733c7"
          ) {
            return <MiddleConstr key={elem._id} itemFood={elem} />;
          }
        })}
      </div>
      <div className={styles.BunContainerBottom}>
        {data.map((elem, i) => {
          if (elem._id === "60d3b41abdacab0026a733c6") {
            return <BunContainerBottom key={elem._id} itemFood={elem} />;
          }
        })}
      </div>
      <OrderStateContext.Provider value={{ orderNumber, setOrderNumber }}>
        <div className={styles.BurgerPrice}>
          <p className="text text_type_digits-medium">{totalPrice}</p>
          <CurrencyIcon type="primary" />

          <div style={{ overflow: "hidden" }}>
            <Button
              type="primary"
              size="large"
              onClick={() => openModalHandler()}
            >
              Оформить заказ
            </Button>
          </div>

          {modalIsOpen && (
            <Modal
              text={"Детали заказа"}
              isOpen={openModalHandler}
              onCancel={closeModalHandler}
            >
              <OrderDetails currentIndredient={data} />
            </Modal>
          )}
        </div>
      </OrderStateContext.Provider>
    </div>
  );
};
