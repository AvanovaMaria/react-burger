import React from 'react';
import styles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerCard from '../BurgerCard/BurgerCard';
import SauseCard from '../SauseCard/SauseCard';

function BurgerIngredients({ingredients}) {
  const [current, setCurrent] = React.useState('one');
  return (
    <>
       <div className={styles.BurgerIngredients}>
    <div className={styles.MainText}>
      <p className="text text_type_main-large">
          Соберите бургер
      </p> 
    </div>
  <div className={styles.TabContainer} style={{ display: 'flex' }}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
      Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  <div className={styles.Ingredients}>
    <p className={styles.HeadlineBun}>Булки</p>
    <div className={styles.BurgerCard}>
      {
        ingredients.map((elem, i) => {
          if (elem.type === "bun") {
            return <BurgerCard key={i} itemFood={elem}/>
          }    
      })
      }
    </div>
    <p className={styles.HeadlineSause}>Соусы</p>
    <div className={styles.SauseCard}>
      {
        ingredients.map((elem, i) => {
          if (elem.type === "sauce") {
            return <SauseCard key={i} itemFood={elem}/>
      }
      })
      }
    </div>
  </div>   
  </div>
    </> 
  )
}

export default BurgerIngredients