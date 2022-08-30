import {url} from '../../utils/baseUrl';

export const OPEN_ORDER_MODAL = "OPEN_ORDER_MODAL";
export const CLOSE_ORDER_MODAL = "CLOSE_ORDER_MODAL";

export function getOrderNumber() {
    return function(dispatch) {
        dispatch({
            type: OPEN_ORDER_MODAL
        });
        fetch(`${url}/orders`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
              ingredients: ["60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d2"],
            }),
          })
            .then(res => res.json())
            .then(data => {
                    return {
                        orderNumber: data.orders
                    }
                });
        };
};
