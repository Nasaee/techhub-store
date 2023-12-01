import { createSelector } from 'reselect';
import { RootState } from '../../type';

const selectProductsReducer = (store: RootState) => store.products;

export const selectFeaturedProducts = createSelector(
  [selectProductsReducer],
  (products) => products.featuredProducts
);

export const selectAllProducts = createSelector(
  [selectProductsReducer],
  (products) => products.allProducts
);

export const selectIsProductsLoading = createSelector(
  [selectProductsReducer],
  (products) => products.isLoading
);
