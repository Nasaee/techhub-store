import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice';
import userReducer from './user/userSlice';
import singleProductReducer from './single-product/single-productSlice';

export const rootReducer = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  user: userReducer,
});
