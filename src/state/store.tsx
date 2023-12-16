import { configureStore } from '@reduxjs/toolkit';
import portoSlice from './portoSlice';

const store = configureStore({
  reducer: {
    porto: portoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
