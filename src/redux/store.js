import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './phoneBook/slice';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },
});
