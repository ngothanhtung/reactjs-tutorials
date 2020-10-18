import { put, takeLatest } from 'redux-saga/effects';

// ====================================================================================================================
function* AUTH_LOGIN(action) {
  try {
    yield put({ type: 'auth/login/success', payload: { email: 'tungnt' } });
  } catch (error) {
    yield put({
      type: 'auth/login/error',
      error,
    });
  }
}

// ====================================================================================================================
// ====================================================================================================================
export default function* sagas() {
  yield takeLatest('auth/login', AUTH_LOGIN);
}
