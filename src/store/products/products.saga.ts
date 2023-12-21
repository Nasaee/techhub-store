import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from './productsSlice';
import { TProduct } from '../../utils/type';
import { PRODUCTS_URL } from '../../utils/api';

const fetchProducts = async (): Promise<TProduct[]> => {
  const response: AxiosResponse<TProduct[]> = await axios.get(PRODUCTS_URL);
  return response.data;
};

function* fetchProductsAsync() {
  try {
    const products: TProduct[] = yield call(fetchProducts);
    yield put(fetchProductsSuccess(products));
  } catch (error: any) {
    if (error.message) {
      yield put(fetchProductsFailure(error.message));
    } else {
      yield put(fetchProductsFailure('fetch data failed'));
    }
  }
}

function* onFetchProducts() {
  yield takeLatest(fetchProductsStart, fetchProductsAsync);
}

export function* productsSaga() {
  yield all([call(onFetchProducts)]);
}
