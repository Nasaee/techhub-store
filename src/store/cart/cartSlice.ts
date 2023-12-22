import { createSlice } from '@reduxjs/toolkit';
import { TCartItem } from '../../utils/type';

type TState = TCartItem[];

const initialState: TState = [];

const checkItemIsExist = (state: TState, productToAdd: TCartItem) => {
  return state.find(
    (item) =>
      item.id === productToAdd.id &&
      item.color === productToAdd.color &&
      item.storage === productToAdd.storage
  );
};

export const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addToCart: (state, action) => {
      if (!checkItemIsExist(state, action.payload)) {
        state.push(action.payload);
      } else {
        state.forEach((item) => {
          if (
            item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.storage === action.payload.storage
          ) {
            item.quantity += action.payload.quantity;
          }
        });
      }
    },

    clearCart: (state) => {
      state.length = 0;
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
