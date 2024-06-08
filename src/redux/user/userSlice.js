import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      token:null,
      user:null
    }
  },
  reducers: {
    isUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { isUser } = userSlice.actions;
export const userSliceReducer = userSlice.reducer;

//LS
const userAuthPersistConfig = {
    key: 'userToken',
    storage,
    whitelist: ['user'],
  };
  export const persistedUserAuthReducer = persistReducer(
    userAuthPersistConfig,
    userSliceReducer
  );

// Selectors
export const getUser = state => state.user.user.user;
export const getToken = state => state.user.user.token;
