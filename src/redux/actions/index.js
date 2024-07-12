export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const FETCH_SONGS_REQUEST = 'FETCH_SONGS_REQUEST';
export const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS';
export const FETCH_SONGS_FAILURE = 'FETCH_SONGS_FAILURE';

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});

export const toggleLike = (song) => ({
  type: TOGGLE_LIKE,
  payload: song,
});

const fetchSongsRequest = () => ({
  type: FETCH_SONGS_REQUEST,
});

const fetchSongsSuccess = (query, songs) => ({
  type: FETCH_SONGS_SUCCESS,
  payload: { query, songs },
});

const fetchSongsFailure = (error) => ({
  type: FETCH_SONGS_FAILURE,
  payload: error,
});

export const fetchSongs = (query) => {
  return async (dispatch) => {
    dispatch(fetchSongsRequest());
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      if (response.ok) {
        const data = await response.json();
        dispatch(fetchSongsSuccess(query, data.data));
      } else {
        throw new Error('Error fetching songs');
      }
    } catch (error) {
      dispatch(fetchSongsFailure(error.message));
    }
  };
};
