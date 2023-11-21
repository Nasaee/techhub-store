import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice';

export const rootReducer = combineReducers({ products: productsReducer });
