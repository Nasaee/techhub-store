import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice';
import userReducer from './user/userSlice';
import cartReducer from './cart/cartSlice';

export const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});
