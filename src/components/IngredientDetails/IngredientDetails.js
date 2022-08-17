import React from "react";
import styles from "./IngredientDetails.module.css";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";

export const IngredientDetails = ({ currentIndredient }) => {
  return (
    <>
      <div className={styles.ImageContainer}>
        <img src={currentIndredient.image} alt="yummy-yummy" />
      </div>
      <div className={styles.NameContainer}>
        <p className="text text_type_main-medium">{currentIndredient.name}</p>
      </div>
      <div className={styles.DescriptionContainer}>
        <p className="text text_type_main-default text_color_inactive">
          Калории, ккал <br />
          {currentIndredient.calories}
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Белки, г <br />
          {currentIndredient.proteins}
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Жиры, г <br />
          {currentIndredient.fat}
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Углеводы, г <br />
          {currentIndredient.carbohydrates}
        </p>
      </div>
    </>
  );
};

IngredientDetails.propTypes ={
  currentIndredient: PropTypes.object.isRequired
}
