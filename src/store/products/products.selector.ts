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
  (products) => {
    const uniqueCategories = products.allProducts
      .reduce((acc, product) => {
        if (!acc.includes(product.category)) {
          acc.push(product.category);
        }
        return acc;
      }, [] as string[])
      .sort();

    return ['All', ...uniqueCategories];
  }
);

export const selectBrands = createSelector(
  [selectProductsReducer],
  (products) => {
    const uniqueBrands = products.allProducts
      .reduce((acc, product) => {
        if (!acc.includes(product.brand)) {
          acc.push(product.brand);
        }
        return acc;
      }, [] as string[])
      .sort();

    return ['All', ...uniqueBrands];
  }
);

export const selectProcessor = createSelector(
  [selectProductsReducer],
  (products) => {
    const uniqueProcessor = products.allProducts
      .reduce((acc, product) => {
        if (!acc.includes(product.cpu)) {
          acc.push(product.cpu);
        }
        return acc;
      }, [] as string[])
      .sort();

    return ['All', ...uniqueProcessor];
  }
);

export const selectMaxPrice = createSelector(
  [selectProductsReducer],
  (products) =>
    products.allProducts.reduce(
      (acc, product) => Math.max(acc, ...product.price),
      0
    )
);

export const selectMinPrice = createSelector(
  [selectProductsReducer],
  (products) => products.filters.max_price
);

export const selectFilters = createSelector(
  [selectProductsReducer],
  (products) => products.filters
);
