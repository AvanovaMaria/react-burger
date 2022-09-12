import {
    CHOOSE_INGREDIENT_REQUEST,
    CHOOSE_INGREDIENT_SUCCESS,
    CHOOSE_INGREDIENT_FAILED
} from '../actions/chooseIngredients';

const initialState = {
    chosenIngredients: [],
    chosenIngredientsRequest: false,
    chosenIngredientsFailed: false
}

export const chooseIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_INGREDIENT_REQUEST: {
            return {
                ...state,
                chosenIngredientsRequest: true
            };
        }
        case CHOOSE_INGREDIENT_SUCCESS: {
            return {
                ...state, 
                chosenIngredientsFailed: false,
                chosenIngredients: action.ingredients,
                chosenIngredientsRequest: false
            };
        }
        case CHOOSE_INGREDIENT_FAILED: {
            return {
                ...state,
                chosenIngredientsFailed: true,
                chosenIngredientsRequest: false
            };
        }
        default: {
            return state;
          }
    }
}