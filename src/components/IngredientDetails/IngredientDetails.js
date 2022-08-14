import React from "react";
import styles from "./IngredientDetails.module.css";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";

export const IngredientDetails = (props) => {
  return (
    <div>
      <Modal text="Детали ингредиента" {...props}>
        <div className={styles.ImageContainer}>
          <img src={props.image} alt="yummy-yummy" />
        </div>
        <div className={styles.NameContainer}>
          <p className="text text_type_main-medium">{props.name}</p>
        </div>
        <div className={styles.DescriptionContainer}>
          <p className="text text_type_main-default text_color_inactive">
            Калории, ккал {props.calories}
          </p>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г {props.proteins}
          </p>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г {props.fat}
          </p>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г {props.carbohydrates}
          </p>
        </div>
      </Modal>
    </div>
  );
};

IngredientDetails.propTypes = {
  props: PropTypes.func.isRequired,
};
