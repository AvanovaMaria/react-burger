import React, { useState, useEffect, useCallback } from 'react';
import styles from './ConstructorIngredientsList.module.css';
import { chooseItemFoods } from '../../services/actions/chooseIngredients';
import { useDispatch, useSelector } from 'react-redux';
import BunConstructorTop from "../BunConstructorTop/BunConstructorTop";
import MiddleConstr from "../MiddleConstr/MiddleConstr";
import BunContainerBottom from "../BunContainerBottom/BunContainerBottom";
import {CHOOSE_INGREDIENT_SUCCESS} from '../../services/actions/chooseIngredients';
import {
    ConstructorElement,
    DragIcon,
    CurrencyIcon,
    Button,
  } from "@ya.praktikum/react-developer-burger-ui-components";


export const ConstructorIngredientsList = () => {
    const dispatch = useDispatch();
    
      useEffect(
        () => {
          dispatch(chooseItemFoods());
        },
        [dispatch]
      );

      const {chosenIngredients} = useSelector(
        state => state.chosenData
      );

      const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = chosenIngredients[dragIndex];
        const newCards = [...chosenIngredients]
        newCards.splice(dragIndex, 1)
        newCards.splice(hoverIndex, 0, dragCard)
        dispatch({
            type: CHOOSE_INGREDIENT_SUCCESS,
            optional: newCards,
          })
      }, [chosenIngredients, dispatch]);

  return (
    <>
        <div className={styles.BunContainerTop}>
        {chosenIngredients.map((elem, i) => {
          if (elem.type === "bun") {
            return <BunConstructorTop key={elem.dragId} index={i} itemFood={elem} moveCard={moveCard} />;
          }
        })}
      </div>
      <div className={styles.MiddleContainer}>
        {chosenIngredients.map((elem, i) => {
          if (elem.type !== "bun") {
            return <MiddleConstr key={elem.dragId} index={i} itemFood={elem} moveCard={moveCard} />;
          }
        })}
      </div>
      <div className={styles.BunContainerBottom}>
        {chosenIngredients.map((elem, i) => {
          if (elem.type === "bun") {
            return <BunContainerBottom key={elem.dragId} index={i} itemFood={elem} moveCard={moveCard} />;
          }
        })}
      </div>
    </>
  )
}
