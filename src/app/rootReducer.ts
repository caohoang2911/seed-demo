import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../modules/auth/authSlice';
import { persistReducer } from 'redux-persist';
import { authPersistConfig } from './persistReducer';

const rootReducer = combineReducers({
  // counter: counterReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
