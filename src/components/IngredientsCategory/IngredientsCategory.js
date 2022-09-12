import React, { useRef, forwardRef } from 'react';
import styles from './IngredientsCategory.module.css';
import IngredientCard from '../IngredientCard/IngredientCard';

export const IngredientsCategory = forwardRef(({title, titleId, ingredients}, ref) => {
  return (
    <>
    <p className="text text_type_main-medium" id={titleId}>
  {title}
</p>
<div className={styles.items} ref={ref}>
{ingredients.map((ingredient) => {
    return <IngredientCard
    itemFood={ingredient}
    key={ingredient._id}
     />
})}
</div>
    </>
    
  )
})
