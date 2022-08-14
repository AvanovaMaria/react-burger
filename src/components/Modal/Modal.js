import React, { useLayoutEffect, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      cancelHandler();
    }
  });

  return createPortal(
    <div className={styles.Modal} onClick={props.onCancel}>
      <div
        className={styles.ModalContent}
        onClick={(el) => el.stopPropagation()}
      >
        <div className={styles.ModalHeader}>
          <span className={styles.ModalText}>{props.text}</span>
          <span className={styles.CloseButton} onClick={props.onCancel}>
            <CloseIcon className={styles.ButtonIcon} type="primary" />
          </span>
        </div>
        <div>{props.children}</div>
      </div>
    </div>,
    document.getElementById("react-modals")
  );
}

Modal.propTypes = {
  props: PropTypes.func.isRequired,
};

export default Modal;
