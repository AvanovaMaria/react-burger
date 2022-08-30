import {
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/modal';

const initialModalState = {
    isOpen: false,
    ingredient: {}
}

export const modalStore = (state = initialModalState, action) => {
switch (action.type) {
    case OPEN_MODAL: {
    return {
        ...state,
        isOpen: true,
        ingredient: action.payload
    }
    }
    case CLOSE_MODAL: {
        return {
            ...state,
            isOpen: false
        }
    }
    default: {
        return state;
      }
}
}