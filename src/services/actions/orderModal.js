import { makeOrder } from "../../utils/baseUrl";

export const OPEN_ORDER_MODAL = "OPEN_ORDER_MODAL";
export const CLOSE_ORDER_MODAL = "CLOSE_ORDER_MODAL";
export const SET_ORDER_NUMBER = "SET_ORDER_NUMBER";

export function getOrderNumber() {
  return function (dispatch) {
    dispatch({
      type: OPEN_ORDER_MODAL,
    });
    makeOrder().then((res) => {
      dispatch({
        type: SET_ORDER_NUMBER,
        orderNumber: res,
      });
    })
    .catch(err => err.message)
  };
}
