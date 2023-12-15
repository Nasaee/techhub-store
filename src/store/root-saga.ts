import { all, call } from 'redux-saga/effects';

import { productsSaga } from './products/products.saga';
import { singleProductSaga } from './single-product/single-product.saga';

export function* rootSaga() {
  yield all([call(productsSaga), call(singleProductSaga)]);
}
