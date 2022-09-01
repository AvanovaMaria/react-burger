import React, { useContext } from "react";
import styles from "./OrderDetails.module.css";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from 'react-redux';

export const OrderDetails = () => {
  
  return (
    <>
      <div className={styles.IdentContainer}>
        <p className="text text_type_digits-large"></p>
        <p className="text text_type_main-medium">идентификатор заказа</p>
      </div>
      <div className={styles.IconContainer}>
        <CheckMarkIcon type="primary" />
      </div>
      <div className={styles.TextContainer}>
        <p className="text text_type_main-default">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </>
  );
};

