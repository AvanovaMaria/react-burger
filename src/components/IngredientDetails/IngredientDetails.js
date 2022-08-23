import React from "react";
import styles from "./IngredientDetails.module.css";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";

export const IngredientDetails = ({ itemFood }) => {
  return (
    <>
      <div className={styles.ImageContainer}>
        <img src={itemFood.image} alt="yummy-yummy" />
      </div>
      <div className={styles.NameContainer}>
        <p className="text text_type_main-medium">{itemFood.name}</p>
      </div>
      <div className={styles.DescriptionContainer}>
        <p className="text text_type_main-default text_color_inactive">
          Калории, ккал <br />
          {itemFood.calories}
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Белки, г <br />
          {itemFood.proteins}
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Жиры, г <br />
          {itemFood.fat}
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Углеводы, г <br />
          {itemFood.carbohydrates}
        </p>
      </div>
    </>
  );
};

IngredientDetails.propTypes = {
  itemFood: PropTypes.object.isRequired,
};
