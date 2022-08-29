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
