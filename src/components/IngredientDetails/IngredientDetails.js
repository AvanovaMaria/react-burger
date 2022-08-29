import React, { useEffect } from "react";
import styles from "./IngredientDetails.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { getItemFoods } from '../../services/actions/getIngredients';

export const IngredientDetails = ({ingredient}) => {

  return (
    <>
      <div className={styles.ImageContainer}>

        <img src={ingredient.image} alt="yummy-yummy" />
      </div>
      <div className={styles.NameContainer}>
        <p className="text text_type_main-medium">{ingredient.name}</p>
      </div>
      <div className={styles.DescriptionContainer}>
        <p className="text text_type_main-default text_color_inactive">
          Калории, ккал <br />
          {ingredient.calories}
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Белки, г <br />
          {ingredient.proteins}
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Жиры, г <br />
          {ingredient.fat}
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Углеводы, г <br />
          {ingredient.carbohydrates}
        </p>
      </div>
    </>
  );
};


