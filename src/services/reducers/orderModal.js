import {
    OPEN_ORDER_MODAL,
    CLOSE_ORDER_MODAL,
    SET_ORDER_NUMBER
} from '../actions/orderModal';

const initialOrderState = {
    isOpen: false,

    orderNumber: {},
    orderNumberRequest: false,
    orderNumberFailed: false
}

export const modalOrder = (state = initialOrderState, action) => {
    switch (action.type) {
        case OPEN_ORDER_MODAL: {
            return {
                ...state,
            isOpen: true,
            orderNumberRequest: true,
                orderNumberFailed: false
            }
        }
        case SET_ORDER_NUMBER: {
            return {
                ...state,
                orderNumber: action.data,
            }
        }
        case CLOSE_ORDER_MODAL: {
            return {
                ...state,
                isOpen: false,
                orderNumberFailed: true
            }
        }
        default: {
            return state;
          }
    }
}

