import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice';
import themeReducer from './theme/themeSlice';
import cartReducer from './cart/cartSlice';

export const rootReducer = combineReducers({
  theme: themeReducer,
  products: productsReducer,
  cart: cartReducer,
});
