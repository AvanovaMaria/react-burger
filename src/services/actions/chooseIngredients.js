import { getIngredients } from "../../utils/baseUrl";

export const CHOOSE_INGREDIENT_REQUEST = 'CHOOSE_INGREDIENT_REQUEST';
export const CHOOSE_INGREDIENT_SUCCESS = 'CHOOSE_INGREDIENT_SUCCSES';
export const CHOOSE_INGREDIENT_FAILED = 'CHOOSE_INGREDIENT_REQUEST';

export function chooseItemFoods() {
    return function(dispatch) {
      dispatch({
        type: CHOOSE_INGREDIENT_REQUEST
      });
      getIngredients().then(res => {
        if (res && res.success) {
          dispatch({
            type: CHOOSE_INGREDIENT_SUCCESS,
            ingredients: res.data
          });
        } else {
          dispatch({
            type: CHOOSE_INGREDIENT_FAILED
          });
        }
      });
    };
  }
