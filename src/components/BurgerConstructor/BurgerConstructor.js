import React, { useState, useEffect, useContext } from "react";
import { ConstructorIngredientsList } from "../ConstructorIngredientsList/ConstructorIngredientsList";
import styles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import MiddleConstr from '../MiddleConstr/MiddleConstr';
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { useDispatch, useSelector } from 'react-redux';
import {
  CLOSE_ORDER_MODAL
} from '../../services/actions/orderModal';
import { makeOrder } from "../../utils/baseUrl";
import {getOrderNumber} from '../../services/actions/orderModal';
import { useDrop, useDrag } from 'react-dnd';
import {addToConstructor} from '../../services/actions/constructor';


export const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const {isOpen} = useSelector(state => ({
    isOpen: state.showOrderModal.isOpen}));
    const {chosenIngredients} = useSelector(
      state => state.chosenData
    );
    const orderedItems = useSelector((state) => state.orderedItems)

  function closeModalHandler() {
    dispatch({
      type: CLOSE_ORDER_MODAL,
    })
  }

  const [{canDrop, dragItem}, drop] = useDrop(() => ({
    accept: "NEW_INGREIENT",
    drop: (item) => dispatch(addToConstructor(item)),
    collect: (monitor) => ({
      canDrop: monitor.canDrop,
      dragItem: monitor.dragItem,
      isOver: monitor.isOver
    }),
  }))

  const dragBuns = canDrop && dragItem && dragItem.type === "bun";

  const dragIngredients = canDrop && dragItem && dragItem.type !== "bun";

  dispatch(
    makeOrder([
      orderedItems.bun,
      ...orderedItems.ingredients.map((elem) => elem.id),
      orderedItems.bun
    ])
  )


  return (
    <section className={styles.BurgerConstructor} ref={drop}>
      {orderedItems.bun ? (
        <div className={`${styles.TopConstructor}`}>
        <ConstructorElement
        type = "top"
        isLocked={true}
        text={orderedItems.bun.name}
        price={orderedItems.bun.price}
        thumbnail={orderedItems.bun.image}
         />
        </div>
      ) : (
        <div className={`${styles.notBun} ${dragBuns && styles.dragActive} ${styles.notBunsTop}`}>
        Choose your bun
        </div>
      )}
      <ul className={styles.MiddleConstructor}>
        {orderedItems.ingredients.length > 0 ? (
          orderedItems.ingredients.map((item, index) => {
            return (
              <MiddleConstr
              ingredient={item}
              index={index}
              key={item.id}
               />
            );
          })
        ) : (
          <div className={`${styles.noBuns} ${dragIngredients && styles.dragActive}`}>
            Choose your ingredients
          </div>
        )
        }
      </ul>
      {orderedItems.bun ? (
        <div className={`${styles.TopConstructor}`}>
        <ConstructorElement
        type = "bottom"
        isLocked={true}
        text={orderedItems.bun.name}
        price={orderedItems.bun.price}
        thumbnail={orderedItems.bun.image}
         />
        </div>
      ) : (
        <div className={`${styles.notBun} ${dragBuns && styles.dragActive} ${styles.notBunsTop}`}>
        Choose your bun
        </div>
      )}
        <div className={styles.BurgerPrice}>
          <p className="text text_type_digits-medium">18730</p>
          <CurrencyIcon type="primary" />

          <div style={{ overflow: "hidden" }}>
            <Button
              type="primary"
              size="large"
              onClick={() => dispatch(getOrderNumber())}
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
              <OrderDetails />
            </Modal>
          )}
        </div>
    </section>
  );
};

/*
const [{ isHover }, dropTargerRef] = useDrop({
    accept: 'ingredient',
    collect: monitor => ({
      isHover: monitor.isOver()
    }),
    drop(item) {
      dispatch({
        type: CHOOSE_INGREDIENT_SUCCESS,
        item: {
          ...item,
          dragId: uuidv4(),
        }
      })
    }
  })
      
      useEffect(() => {
    let total = 0;
    ingredients.map((item) => (total += item.price));
    setTotalPrice(total);
  }, [ingredients, setTotalPrice]);
*/