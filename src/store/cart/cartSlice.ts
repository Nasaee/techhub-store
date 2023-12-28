import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TCartItem } from '../../utils/type';
import toast from 'react-hot-toast';

type TState = TCartItem[];

type TIdentify = {
  id: string;
  color: string;
  storage: string;
};

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
    increaseQuantity: (state, action: PayloadAction<TIdentify>) => {
      const { id, color, storage } = action.payload;
      state.forEach((item) => {
        if (
          item.id === id &&
          item.color === color &&
          item.storage === storage
        ) {
          const newQuantity = item.quantity + 1;
          if (item.stock < newQuantity) {
            return toast.error('Out of stock');
          }
          item.quantity = newQuantity;
        }
      });
    },

    decreaseQuantity: (state, action: PayloadAction<TIdentify>) => {
      const { id, color, storage } = action.payload;
      state.forEach((item, index) => {
        if (
          item.id === id &&
          item.color === color &&
          item.storage === storage
        ) {
          const newQuantity = item.quantity - 1;
          if (newQuantity < 1) {
            state.splice(index, 1);

            return toast.success('Item removed');
          }
          item.quantity = newQuantity;
        }
      });
    },

    clearCart: (state) => {
      state.length = 0;
    },

    clearCartReduxPersist() {
      return initialState;
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeItemFormCart,
  increaseQuantity,
  decreaseQuantity,
  clearCartReduxPersist,
} = cartSlice.actions;

export default cartSlice.reducer;
