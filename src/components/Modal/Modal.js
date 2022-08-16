import React, { useEffect, useLayoutEffect, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";

function Modal({ text, isOpen, onCancel, children }) {
  useEffect(() => {
    function closeByEscape(event) {
      if (event.key === "Escape") {
        onCancel();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);

  return createPortal(
    <>
      <ModalOverlay onCancel={onCancel} />
      <div className={styles.Modal} onClick={(el) => el.stopPropagation()}>
        <div className={styles.ModalHeader}>
          <span className={styles.ModalText}>{text}</span>
          <span className={styles.CloseButton} onClick={onCancel}>
            <CloseIcon className={styles.ButtonIcon} type="primary" />
          </span>
        </div>
        <div>{children}</div>
      </div>
    </>,
    document.getElementById("react-modals")
  );
}

Modal.propTypes = {
  text: PropTypes.string.isRequired,
  isOpen: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Modal;
