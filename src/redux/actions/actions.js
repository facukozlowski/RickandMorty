import { ADD_FAV, REMOVE_FAV, FILTER_CARD, ORDER_CARD } from "./types";

export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character,
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

export const filterCard = (gender) => {
  return {
    type: FILTER_CARD,
    payload: gender
  }
}

export const orderCard = (orden) => {
  return {
    type: ORDER_CARD,
    payload: orden
  }
}