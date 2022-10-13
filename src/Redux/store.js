import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from './teams';

const store = configureStore({
  reducer: teamsReducer,
});

export default store;