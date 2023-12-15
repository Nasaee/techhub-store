import axios, { AxiosResponse } from 'axios';
import { TSingleProduct } from '../../utils/type';
import { SINGLE_PRODUCT_URL } from '../../utils/api';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchSingleProductFailure,
  fetchSingleProductStart,
  fetchSingleProductSuccess,
} from './single-productSlice';
import { PayloadAction } from '@reduxjs/toolkit';

const fetchSingleProduct = async (id: string): Promise<TSingleProduct> => {
  const response: AxiosResponse<TSingleProduct> = await axios.get(
    `${SINGLE_PRODUCT_URL}${id}`
  );

  return response.data;
};

function* fetchSingleProductAsync(action: PayloadAction<string>) {
  const id = action.payload;
  try {
    const product: TSingleProduct = yield call(fetchSingleProduct, id);
    yield put(fetchSingleProductSuccess(product));
  } catch (error) {
    if (typeof error === 'string') {
      yield put(fetchSingleProductFailure(error));
    } else {
      yield put(fetchSingleProductFailure('fetch data failed'));
    }
  }
}

function* onFetchSingleProduct() {
  yield takeLatest(fetchSingleProductStart, fetchSingleProductAsync);
}

export function* singleProductSaga() {
  yield all([call(onFetchSingleProduct)]);
}
