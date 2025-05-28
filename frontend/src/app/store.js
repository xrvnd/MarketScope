import { configureStore } from '@reduxjs/toolkit';
import marketReducer from '../features/market/marketSlice';

export const store = configureStore({
  reducer: {
    market: marketReducer,
  },
});
