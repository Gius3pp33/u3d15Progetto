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

export default searchReducer;
