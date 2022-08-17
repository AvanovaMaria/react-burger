import React from "react";
import styles from "./ModalOverlay.module.css";

function ModalOverlay({ onCancel }) {
  return <div className={styles.ModalOverlay} onClick={onCancel}></div>;
}

export default ModalOverlay;
