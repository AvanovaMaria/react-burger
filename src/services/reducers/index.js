import { combineReducers } from 'redux';
import { getIngredientsReducer } from './getIngredients';
import {chooseIngredientsReducer} from './chooseIngredients';
import {modalStore} from "./modal";

const rootReducer = combineReducers({
  data: getIngredientsReducer,
  chosenData: chooseIngredientsReducer,
  showModal: modalStore,
  })
  
  export default rootReducer;