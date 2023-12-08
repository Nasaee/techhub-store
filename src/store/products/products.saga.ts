import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} from './productsSlice';
import { type Product } from '../../type';

const fetchProducts = async (): Promise<Product[]> => {
  const response: AxiosResponse<Product[]> = await axios.get(
    'http://localhost:8888/.netlify/functions/products'
  );
  const products: Product[] = response.data;
  return products;
};

function* fetchProductsAsync() {
  try {
    const products: Product[] = yield call(fetchProducts);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    if (typeof error === 'string') {
      yield put(fetchProductsFailure(error));
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
