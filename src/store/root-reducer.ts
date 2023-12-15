import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice';
import userReducer from './user/userSlice';

export const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
});
