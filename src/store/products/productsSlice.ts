import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../../functions/products';

type ProductsState = {
  isLoading: boolean;
  error: string | null;
  products: Product[];
  filteredProducts: Product[];
};

const initialState: ProductsState = {
  isLoading: false,
  error: null,
  products: [],
  filteredProducts: [],
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
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productsSlice.actions;

export default productsSlice.reducer;
