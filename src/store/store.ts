import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';
import { createLogger } from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware =
  import.meta.env.NODE_ENV !== 'production' && createLogger();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(sagaMiddleware, loggerMiddleware as SagaMiddleware<object>),
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
