export const url = "https://norma.nomoreparties.space/api";

export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredients = () => {
  return fetch(`${url}/ingredients`)
  .then(checkResponse)
  .then(data => {
    return data;
  });
};

export const makeOrder = () => {
  return fetch(`${url}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      ingredients: ["60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733d2"],
    }),
  })
    .then(checkResponse)
    .then(data => {
      return data;
    });
};