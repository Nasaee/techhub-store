import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TCartItem } from '../../utils/type';

type TState = TCartItem[];

type TIdentify = {
  id: string;
  color: string;
  storage: string;
};

export type TUpdateQuantity = TIdentify & { quantity: number };

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

    removeItemFormCart: (state, action: PayloadAction<TIdentify>) => {
      const { id, color, storage } = action.payload;
      return state.filter(
        (item) =>
          !(item.id === id && item.color === color && item.storage === storage)
      );
    },

    updateQuntinty: (state, action: PayloadAction<TUpdateQuantity>) => {
      const { id, color, storage } = action.payload;
      state.forEach((item) => {
        if (
          item.id === id &&
          item.color === color &&
          item.storage === storage
        ) {
          item.quantity = action.payload.quantity;
        }
      });
    },

    clearCart: (state) => {
      state.length = 0;
    },
  },
});

export const { addToCart, clearCart, removeItemFormCart, updateQuntinty } =
  cartSlice.actions;

export default cartSlice.reducer;
