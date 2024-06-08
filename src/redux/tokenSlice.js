// import { createSlice } from '@reduxjs/toolkit';

// // import storage from 'redux-persist/lib/storage';
// // import { persistReducer } from 'redux-persist';

// const tokenSlice = createSlice({
//   name: 'token',
//   initialState: {
//     token: null,
//   },
//   reducers: {
//     isToken: (state, action) => {
//       console.log(action);
//       state.token = action.payload.token;
//     },
//   },
// });

// export const { isToken } = tokenSlice.actions;
// export const tokenSliceReducer = tokenSlice.reducer;

// // //LS
// // const userAuthPersistConfig = {
// //     key: 'userToken',
// //     storage,
// //     whitelist: ['token'],
// //   };
// //   export const persistedUserAuthReducer = persistReducer(
// //     userAuthPersistConfig,
// //     tokenSliceReducer
// //   );

// // Selectors
// export const getToken = state => state.token.token;