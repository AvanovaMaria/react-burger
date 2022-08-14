import React, { useState } from "react";
import styles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerCard from "../BurgerCard/BurgerCard";
import SauseCard from "../SauseCard/SauseCard";
import MainCard from "../MainCard/MainCard";
import Backdrop from "../Backdrop/Backdrop";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";

function BurgerIngredients({ ingredients }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModalHandler({ ingredients }) {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  const [current, setCurrent] = React.useState("one");
  return (
    <>
      <div className={styles.BurgerIngredients}>
        <div className={styles.MainText}>
          <p className="text text_type_main-large">Соберите бургер</p>
        </div>
        <div className={styles.TabContainer} style={{ display: "flex" }}>
          <Tab value="one" active={current === "one"} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === "two"} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === "three"} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
        <div className={styles.Ingredients}>
          <p className={styles.HeadlineBun}>Булки</p>
          <div className={styles.BurgerCard}>
            {ingredients.map((elem, i) => {
              if (elem.type === "bun") {
                return (
                  <BurgerCard
                    key={elem._id}
                    itemFood={elem}
                    onClick={(elem) => openModalHandler(elem._id)}
                  />
                );
              }
            })}
          </div>
          <p className={styles.HeadlineSause}>Соусы</p>
          <div className={styles.SauseCard}>
            {ingredients.map((elem, i) => {
              if (elem.type === "sauce") {
                return (
                  <SauseCard
                    key={elem._id}
                    itemFood={elem}
                    onClick={(elem) => openModalHandler(elem._id)}
                  />
                );
              }
            })}
          </div>
          <p className={styles.HeadlineMain}>Начинки</p>
          <div className={styles.MainCard}>
            {ingredients.map((elem, i) => {
              if (elem.type === "main") {
                return (
                  <MainCard
                    key={elem._id}
                    itemFood={elem}
                    onClick={(elem) => openModalHandler(elem._id)}
                  />
                );
              }
            })}
          </div>
        </div>
        {modalIsOpen && <IngredientDetails onCancel={closeModalHandler} />}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
    </>
  );
}

export default BurgerIngredients;
