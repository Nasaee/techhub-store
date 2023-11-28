import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type Product, type ProductsState } from '../../type';

const initialState: ProductsState = {
  isLoading: false,
  error: null,
  products: [],
  filteredProducts: [],
  featuredProducts: [],
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
      state.error = null;
      const featuredProducts: Product[] = action.payload.filter(
        (product) => product.featured
      );
      state.featuredProducts = featuredProducts;
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
