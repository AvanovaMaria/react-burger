import React from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerConstructor.module.css';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';


export const BurgerConstructor = () => {
  return (
    <div className={styles.BurgerConstructor} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <div className={styles.ConstructorCard}>
    <DragIcon type="primary" />
    <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        //thumbnail={}
      />
    </div>
      <div className={styles.BurgerPrice}>
      <p className="text text_type_digits-medium">610</p>
      <CurrencyIcon type="primary" />
       <Button type="primary" size="large">
        Оформить заказ
      </Button>
      </div>
    </div>
  )
  
}
