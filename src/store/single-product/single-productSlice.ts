import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SingleProductState, TSingleProduct } from '../../utils/type';

const initialState: SingleProductState = {
  isLoading: false,
  error: null,
  product: null,
};

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState,
  reducers: {
    // put _ to action for fix warning error value never use
    fetchSingleProductStart: (state, _action: PayloadAction<string>) => {
      state.isLoading = true;
      state.product = null;
    },
    fetchSingleProductSuccess: (
      state,
      action: PayloadAction<TSingleProduct>
    ) => {
      state.isLoading = false;
      state.product = action.payload;
      state.error = null;
    },
    fetchSingleProductFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.product = null;
    },
  },
});

export const {
  fetchSingleProductStart,
  fetchSingleProductSuccess,
  fetchSingleProductFailure,
} = singleProductSlice.actions;

export default singleProductSlice.reducer;
