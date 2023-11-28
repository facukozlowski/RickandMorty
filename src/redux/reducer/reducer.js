import { ADD_FAV, REMOVE_FAV, FILTER_CARD, ORDER_CARD } from "../actions/types";

const initialState = { myFavorites: [], allCharacters: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== Number(action.payload)
        ),
      };
    case FILTER_CARD:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (character) => character.gender === action.payload
        ),
      };

    case ORDER_CARD:
      let ordenamiento;
      if (action.payload === "A") {
        ordenamiento = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        ordenamiento = state.myFavorites.sort((a, b) => (b.id > a.id ? 1 : -1));
      }
      return {
        ...state,
        myFavorites: [...ordenamiento],
      };

    default:
      return state;
  }
};

export default rootReducer;
