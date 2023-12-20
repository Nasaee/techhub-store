import { createSlice } from '@reduxjs/toolkit';

type TCart = {
  id: string;
  name: string;
  color: string;
  price: number;
  quantity: number;
  brand: string;
  storage: string;
};
type TState = TCart[];

const initialState: TState = [];

const checkItemIsExist = (state: TState, productToAdd: TCart) => {
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
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
