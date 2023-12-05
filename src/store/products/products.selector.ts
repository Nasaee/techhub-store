import { createSelector } from 'reselect';
import { RootState } from '../../type';

const selectProductsReducer = (store: RootState) => store.products;

export const selectFeaturedProducts = createSelector(
  [selectProductsReducer],
  (products) => products.allProducts.filter((product) => product.featured)
);

export const selectAllProducts = createSelector(
  [selectProductsReducer],
  (products) => products.allProducts
);

export const selectFilteredProducts = createSelector(
  [selectProductsReducer],
  (products) => products.filteredProducts
);

export const selectIsProductsLoading = createSelector(
  [selectProductsReducer],
  (products) => products.isLoading
);

export const selectCategories = createSelector(
  [selectProductsReducer],
  (products) =>
    products.allProducts.map((products) => [...new Set(products.category)])
);

export const selectBrands = createSelector(
  [selectProductsReducer],
  (products) =>
    products.allProducts.map((product) => [...new Set(product.brand)])
);

export const selectProcessor = createSelector(
  [selectProductsReducer],
  (products) => products.allProducts.map((product) => [...new Set(product.cpu)])
);
