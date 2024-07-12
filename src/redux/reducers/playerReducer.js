import { createSelector } from '@reduxjs/toolkit';
import { SET_CURRENT_SONG } from '../actions';


const selectPlayerState = state => state.player;

export const selectCurrentSong = createSelector(
  [selectPlayerState],
  player => player.currentSong
);


const initialState = {
  currentSong: null,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
