import {configureStore } from '@reduxjs/toolkit'
import { AuthApi } from './authAPI/authAPI'
import { UsersApi } from './usersAPI/usersAPI';
// import { tokenSliceReducer } from './tokenSlice'
// import { userSliceReducer } from './user/userSlice'
import { persistedUserAuthReducer } from './user/userSlice'
import { usersSliceReducer } from './users/usersSlice';

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
        users:usersSliceReducer,
        [AuthApi.reducerPath]: AuthApi.reducer,
        [UsersApi.reducerPath]:UsersApi.reducer
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(AuthApi.middleware)
    middleware: (getDefaultMiddleware)=> [...getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
        AuthApi.middleware,
        UsersApi.middleware,
    ],
})


export const persistor = persistStore(store);

setupListeners(store.dispatch);