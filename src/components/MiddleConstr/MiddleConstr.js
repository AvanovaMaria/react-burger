import React, {useRef} from "react";
import PropTypes from "prop-types";
import styles from "./MiddleConstr.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  CONSTRUCTOR_REORDER,
  CONSTRUCTOR_DELETE
} from '../../services/actions/constructor';
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from 'react-dnd';

function MiddleConstr({ ingredient, index }) {
  const dispatch = useDispatch();

  const ref = useRef(null);
  const [{handlerId}, drop] = useDrop({
    accept: ["SORT_INGREDIENT"],
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (hoverIndex === dragIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch({
        type: CONSTRUCTOR_REORDER,
        payload: {
          from: dragIndex,
          to: hoverIndex,
        },
      });
      item.index = hoverIndex;
    },
  });

  const [{isDragging}, drag] = useDrag({
    type: "SORT_INGREDIENT",
    item: () => {
      return {ingredient, index};
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div className={styles.MiddleConstr} ref={ref} style={{ opacity }} data-handler-id={handlerId}>
      <DragIcon type="primary" />
      <ConstructorElement
        className={styles.MiniCard}
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image_mobile}
      />
    </div>
  );
}

export default MiddleConstr;
