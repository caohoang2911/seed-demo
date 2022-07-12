import storage from 'redux-persist/lib/storage';

// import { authReducer, otherReducer } from './reducers'

// export const rootPersistConfig = {
//   key: 'root',
//   storage: storage,
//   backlist: ['auth','counter']
// }

export const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['isLogin', 'token'],
};

// const rootReducer = combineReducers({
//   auth: persistReducer(authPersistConfig, authReducer),
//   other: otherReducer,
// })

// const   persistReducerConfig = persistReducer(rootPersistConfig, rootReducer)
// export default persistReducerConfig;
