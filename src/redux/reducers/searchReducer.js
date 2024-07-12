import { createSelector } from '@reduxjs/toolkit';
import { FETCH_SONGS_REQUEST, FETCH_SONGS_SUCCESS, FETCH_SONGS_FAILURE } from '../actions';

const initialState = {
  songs: {},
  status: 'idle',
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
        songs: {
          ...state.songs,
          [action.payload.query]: action.payload.songs,
        },
      };
    case FETCH_SONGS_FAILURE:
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };
    default:
      return state;
  }
};

// Selettore base per lo stato delle ricerche
const selectSearchState = state => state.search;

// Selettore per estrarre le canzoni di un artista specifico
export const makeSelectSongsByArtist = artist => createSelector(
  [selectSearchState],
  search => search.songs[artist] || []
);

export default searchReducer;
