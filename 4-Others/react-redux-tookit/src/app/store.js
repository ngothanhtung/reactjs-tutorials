import createSagaMiddleware from 'redux-saga';
import { configureStore, createAction, createReducer, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: true }), sagaMiddleware];

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//     myCounter: myCounter,
//   },
//   middleware: middleware,
//   devTools: process.env.NODE_ENV !== 'production',
// });

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
});

sagaMiddleware.run(rootSagas);

export default store;
