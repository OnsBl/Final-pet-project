import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './Slices/SearchSlice';
import CartReducer from './Slices/CartSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    allCart: CartReducer,
  }
});

export default store;