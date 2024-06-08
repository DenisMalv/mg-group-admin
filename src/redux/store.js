import {configureStore } from '@reduxjs/toolkit'
import { AuthApi } from './auth/authAPI'
// import { tokenSliceReducer } from './tokenSlice'
// import { userSliceReducer } from './user/userSlice'
import { persistedUserAuthReducer } from './user/userSlice'

import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer:{
        // user:userSliceReducer, // no ls
        user:persistedUserAuthReducer, // ls
        [AuthApi.reducerPath]: AuthApi.reducer
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(AuthApi.middleware)
    middleware: (getDefaultMiddleware)=> [...getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
        AuthApi.middleware,
    ],
})


export const persistor = persistStore(store);

setupListeners(store.dispatch);