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
function* AUTH_TEST(action) {
  try {
    const response = yield fetch('https://softech.cloud/api/v1/google?text=nice');
    const json = yield response.json();
    yield put({ type: 'auth/test/success', payload: json });
  } catch (error) {
    yield put({
      type: 'auth/test/error',
      error,
    });
  }
}

// ====================================================================================================================
// ====================================================================================================================
export default function* sagas() {
  yield takeLatest('auth/login', AUTH_LOGIN);
  yield takeLatest('auth/test', AUTH_TEST);
}
