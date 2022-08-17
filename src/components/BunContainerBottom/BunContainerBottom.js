import React from "react";
import PropTypes from "prop-types";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

function BunContainerBottom({ itemFood }) {
  return (
    <ConstructorElement
      type="bottom"
      isLocked={true}
      text="Краторная булка N-200i (низ)"
      price={itemFood.price}
      thumbnail={itemFood.image_mobile}
    />
  );
}

export default BunContainerBottom;

BunContainerBottom.propTypes = {
  itemFood: PropTypes.object.isRequired
};
