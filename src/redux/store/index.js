import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '../reducers/playerReducer';
import likeReducer from '../reducers/likeReducer';
import searchReducer from '../reducers/searchReducer';

const store = configureStore({
  reducer: {
    player: playerReducer,
    likes: likeReducer,
    search: searchReducer,
  },
});

export default store;
