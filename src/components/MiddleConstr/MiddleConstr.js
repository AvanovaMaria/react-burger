import React from "react";
import PropTypes from "prop-types";
import styles from "./MiddleConstr.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function MiddleConstr({ itemFood }) {
  return (
    <div className={styles.MiddleConstr}>
      <DragIcon type="primary" />
      <ConstructorElement
        className={styles.MiniCard}
        text={itemFood.name}
        price={itemFood.price}
        thumbnail={itemFood.image_mobile}
      />
    </div>
  );
}

MiddleConstr.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

export default MiddleConstr;
