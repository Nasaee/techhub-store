import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProduct, type ProductsState } from '../../utils/type';
import { discountPice } from '../../utils/displayPrice.utils';

type updateFiltersPayload = {
  filterName: string;
  value: string | number;
};

const defaultFilters = {
  text: '',
  brand: 'all',
  categories: 'all',
  processor: 'all',
  min_price: 0,
  max_price: 0,
};

const initialState: ProductsState = {
  isLoading: false,
  error: null,
  allProducts: [],
  filteredProducts: [],
  filters: defaultFilters,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.isLoading = true;
    },
    fetchProductsSuccess: (state, action: PayloadAction<TProduct[]>) => {
      state.isLoading = false;
      state.allProducts = action.payload;
      state.error = null;
      state.filteredProducts = action.payload;
      const maxPrice = state.allProducts.reduce(
        (acc, product) => Math.min(acc, ...product.price),
        1
      );
      state.filters = { ...state.filters, max_price: maxPrice };
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

    updateFilters: (state, action: PayloadAction<updateFiltersPayload>) => {
      const { filterName, value } = action.payload;
      state.filters = { ...state.filters, [filterName]: value };
    },

    filterProducts: (state) => {
      const { text, categories, brand, processor, min_price, max_price } =
        state.filters;

      let tempProducts = [...state.allProducts];

      // all
      if (
        (categories.toLowerCase() ||
          brand.toLowerCase() ||
          processor.toLowerCase()) === 'all'
      ) {
        tempProducts = tempProducts = [...state.allProducts];
      }

      // text
      if (text) {
        tempProducts = tempProducts.filter((product) => {
          return product.name.toLowerCase().includes(text);
        });
      }

      // category
      if (categories.toLowerCase() !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.category === categories
        );
      }

      // brand
      if (brand.toLowerCase() !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.brand === brand
        );
      }

      // processor
      if (processor.toLowerCase() !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.cpu === processor
        );
      }

      // price
      if (min_price && max_price && min_price < max_price) {
        tempProducts = [...state.allProducts];
        tempProducts = tempProducts.filter((product) => {
          let lastPrice: number;
          const price = +product.price[0];

          lastPrice = price;

          if (product.featured) {
            const discountPercentage = +product.featured;
            lastPrice = discountPice(price, discountPercentage);
          }

          return lastPrice >= min_price && lastPrice <= max_price;
        });
      }

      state.filteredProducts = tempProducts;
    },

    resetFilters: (state) => {
      state.filters = defaultFilters;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  sortProducts,
  updateFilters,
  filterProducts,
  resetFilters,
} = productsSlice.actions;

export default productsSlice.reducer;
