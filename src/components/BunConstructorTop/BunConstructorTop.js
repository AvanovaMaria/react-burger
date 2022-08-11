import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

function BunConstructorTop({ itemFood }) {
  return (
    <ConstructorElement
      type="top"
      isLocked={true}
      text='"Краторная булка N-200i (верх)"'
      price={itemFood.price}
      thumbnail={itemFood.image_mobile}
    />
  );
}
export default BunConstructorTop;
