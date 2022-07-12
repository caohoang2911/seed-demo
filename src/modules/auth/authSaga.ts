import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { call, fork, put, take, takeLatest } from 'redux-saga/effects';
import { PAGE_DEFAULT_REDIRECT } from '~/config/globalVariable';
import { loginFailure, loginRequest, loginSuccess, logout, logoutSuccess } from './authSlice';
import { LoginPayload } from './pages/login/types/loginTypes';

const fakeLoginApi = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: 200, data: { token: 'my-token' } });
    }, 2000);
  });

function* loginAction(action: PayloadAction<LoginPayload>) {
  const { username, password } = action.payload;
  try {
    const response: AxiosResponse = yield call(fakeLoginApi);
    if (username == 'admin' && password == 'admin') {
      yield put(loginSuccess(response?.data?.token));
    } else {
      throw new Error(`Authentication failed`);
    }
  } catch (err) {
    console.log(err);
    yield put(loginFailure());
  }
}

function* logoutAction() {
  yield put(logoutSuccess());
}

function* watchLoginFlow() {
  yield takeLatest(loginRequest.type, loginAction);
  yield takeLatest(logout.type, logoutAction);
}

const authSaga = [fork(watchLoginFlow)];

export default authSaga;
