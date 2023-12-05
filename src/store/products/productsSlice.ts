import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type Product, type ProductsState } from '../../type';

const initialState: ProductsState = {
  isLoading: false,
  error: null,
  allProducts: [],
  filteredProducts: [],
  filters: {
    text: '',
    brand: 'all',
    category: 'all',
    color: 'all',
    minPrice: 0,
    maxPrice: 0,
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.isLoading = true;
    },
    fetchProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.isLoading = false;
      state.allProducts = action.payload;
      state.error = null;
      state.filteredProducts = action.payload;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    sortProducts: (state, action: PayloadAction<string>) => {
      if (action.payload === 'lowest') {
        state.filteredProducts.sort((a, b) => a.price[0] - b.price[0]);
      }
      if (action.payload === 'highest') {
        state.filteredProducts.sort((a, b) => b.price[0] - a.price[0]);
      }
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  sortProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
