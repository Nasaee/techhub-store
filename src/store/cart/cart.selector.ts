import { createSelector } from 'reselect';
import { RootState } from '../../utils/type';

const selectCartReducer = (store: RootState) => store.cart;

export const selectCountQuantities = createSelector(
  [selectCartReducer],
  (cart) => cart.reduce((acc, item) => acc + item.quantity, 0)
);
