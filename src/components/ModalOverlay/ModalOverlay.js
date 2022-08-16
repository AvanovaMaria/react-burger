import React from "react";

function ModalOverlay(props) {
  function cancelHandler() {
    props.onCancel();
  }
  return <div onClick={props.onCancel} />;
}

export default ModalOverlay;
