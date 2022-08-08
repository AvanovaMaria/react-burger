import React from 'react';
import './App.css';
import {data} from '../src/utils/data';
import { AppHeader } from './components/AppHeader/AppHeader';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import { BurgerConstructor } from './components/BurgerConstructor/BurgerConstructor';

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <div className='AppContainer'></div>
      <BurgerIngredients ingredients={data} />
      <BurgerConstructor />
    </div>
  );
}

export default App;
