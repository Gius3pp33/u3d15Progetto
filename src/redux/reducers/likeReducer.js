import { TOGGLE_LIKE } from "../actions";

const initialState = [];

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIKE:
      return toggleLike(state, action.payload);
    default:
      return state;
  }
};

const toggleLike = (state, songToToggle) => {
  const index = state.findIndex(item => item.id === songToToggle.id);

  if (index >= 0) {
    // Se la canzone è già presente tra i preferiti, la rimuoviamo
    return state.filter(item => item.id !== songToToggle.id);
  } else {
    // Se la canzone non è presente tra i preferiti, la aggiungiamo
    return [...state, songToToggle];
  }
};

export default likeReducer;
