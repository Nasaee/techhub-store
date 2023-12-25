import { createSelector } from 'reselect';
import { RootState } from '../../utils/type';

const selectCartReducer = (store: RootState) => store.cart;

export const selectCountQuantities = createSelector(
  [selectCartReducer],
  (cart) => cart.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartLength = createSelector(
  [selectCartReducer],
  (cart) => cart.length
);

export const selectTotalPrice = createSelector([selectCartReducer], (cart) =>
  cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
