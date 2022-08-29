import React from 'react';
import styles from './IngredientsCategory.module.css';
import IngredientCard from '../IngredientCard/IngredientCard';

export const IngredientsCategory = ({title, titleId, ingredients }) => {
  return (
    <>
    <p className="text text_type_main-medium" id={titleId}>
  {title}
</p>
<div className={styles.items}>
{ingredients.map((ingredient) => {
    return <IngredientCard
    itemFood={ingredient}
    key={ingredient._id}
    
     />
})}
</div>
    </>
    
  )
}
