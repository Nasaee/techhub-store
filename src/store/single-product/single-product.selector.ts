import { createSelector } from 'reselect';
import { RootState } from '../../utils/type';

const selectSingleProductReducer = (store: RootState) => store.singleProduct;

export const selectIsSingleProductLoading = createSelector(
  [selectSingleProductReducer],
  (singleProduct) => singleProduct.isLoading
);

export const selectSingleProduct = createSelector(
  [selectSingleProductReducer],
  (singleProduct) => singleProduct.product
);
