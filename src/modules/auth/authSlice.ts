import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '~/app/store';
import { AuthState, LoginPayload } from './pages/login/types/loginTypes';

const initialState: AuthState = {
  userInfo: [],
  isLogin: false,
  token: null,
  loadingLogin: false,
};

export const logout = createAction<void>('logout');

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state: AuthState, actions: PayloadAction<LoginPayload>) => {
      state.loadingLogin = true;
    },
    loginSuccess: (state: AuthState, actions: PayloadAction<string>) => {
      state.loadingLogin = false;
      state.isLogin = true;
      state.token = actions.payload;
    },
    loginFailure: (state: AuthState) => {
      state.loadingLogin = false;
    },
    logoutSuccess: (state: AuthState) => {
      state.token = null;
      state.isLogin = false;
    },
  },
});

export const getIsLogin = (state: RootState) => state.auth.isLogin;
export const getLoadingLogin = (state: RootState) => state.auth.loadingLogin;

// actions
export const { loginRequest, loginSuccess, loginFailure, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
