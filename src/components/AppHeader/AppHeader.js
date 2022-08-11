import React from "react";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";

export const AppHeader = () => {
  return (
    <>
      <div className={styles.headerLeftMenu}>
        <div className={styles.constrCont}>
          <BurgerIcon className={styles.logoBurger} type="primary" />
          <span className={styles.constrButt}>Конструктор</span>
        </div>
        <div className={styles.orderCont}>
          <ListIcon className={styles.logoOrder} type="secondary" />
          <span className={styles.orderButt}>Лента заказов</span>
        </div>
      </div>
      <div className={styles.headerCentralLogo}>
        <Logo />
      </div>
      <div className={styles.headerRightMenu}>
        <ProfileIcon className={styles.logoProfile} type="secondary" />
        <span className={styles.profileButt}>Личный кабинет</span>
      </div>
    </>
  );
};
