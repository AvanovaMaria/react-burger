import React, {useRef} from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDrop, useDrag } from 'react-dnd';

export default function BunConstructorTop({ itemFood, index, moveCard }) {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'component',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      }
    },
    hover(itemFood, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = itemFood.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
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
      moveCard(dragIndex, hoverIndex);
      itemFood.index = hoverIndex;
    }
    })

    const [{ isDragging }, drag] = useDrag({
      type: 'component',
      item: () => ({ id: itemFood._id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    })

    const opacity = isDragging ? 0 : 1;

    if (itemFood.type === 'bun') drag(drop(ref));
    const preventDefault = (e) => e.preventDefault();

  return (
    <div ref={ref} style={{ opacity }} onDrop={preventDefault} data-handler-id={handlerId} >
  <ConstructorElement
      type="top"
      isLocked={true}
      text='"Краторная булка N-200i (верх)"'
      price={itemFood.price}
      thumbnail={itemFood.image_mobile}
    />
    </div>
    
  );
}

BunConstructorTop.propTypes = {
  itemFood: PropTypes.object.isRequired,
};
