import { TOGGLE_LIKE } from "../actions";


const initialState = [];

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIKE:
      const song = action.payload;
      const index = state.findIndex(item => item.id === song.id);
      if (index >= 0) {
        return state.filter(item => item.id !== song.id);
      } else {
        return [...state, song];
      }
    default:
      return state;
  }
};

export default likeReducer;
