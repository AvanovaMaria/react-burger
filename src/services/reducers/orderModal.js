import {
    OPEN_ORDER_MODAL,
    CLOSE_ORDER_MODAL
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
                orderNumber: action.orders,
                orderNumberFailed: false
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

