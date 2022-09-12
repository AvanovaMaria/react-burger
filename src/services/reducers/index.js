import { combineReducers } from 'redux';
import { getIngredientsReducer } from './getIngredients';
import {chooseIngredientsReducer} from './chooseIngredients';
import {modalStore} from "./modal";
import {modalOrder} from './orderModal';
import {constructorReducer} from './constructor'

const rootReducer = combineReducers({
  data: getIngredientsReducer,
  chosenData: chooseIngredientsReducer,
  showModal: modalStore,
  showOrderModal: modalOrder,
  orderedItems: constructorReducer
  })
  
  export default rootReducer;