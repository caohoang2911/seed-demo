import { all } from 'redux-saga/effects';
import authSaga from '~/modules/auth/authSaga';

function* rootSaga() {
  yield all([...authSaga]);
}

export default rootSaga;
