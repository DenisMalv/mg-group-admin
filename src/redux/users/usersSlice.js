import { createSlice } from '@reduxjs/toolkit';

// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

const INIT_CURRENT_EDIT_USER = {
  _id:null,
  name:'',
  email:'',
  role:'',
}

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    currentEditUser:INIT_CURRENT_EDIT_USER
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setEditedUser:(state,action)=>{
      state.currentEditUser = action.payload;
    },
    clearEditedUser:(state,action)=>{
      state.currentEditUser = INIT_CURRENT_EDIT_USER
    }
  },
});

export const { setUsers,setEditedUser,clearEditedUser } = usersSlice.actions;
export const usersSliceReducer = usersSlice.reducer;


// Selectors
export const getCurrentEditUser = (state) => state.users.currentEditUser;







// export const getLogedUser = state => state.user.user.user;
// export const getToken = state => state.user.user.token;
//LS
// const userAuthPersistConfig = {
//     key: 'userToken',
//     storage,
//     whitelist: ['user'],
//   };
//   export const persistedUserAuthReducer = persistReducer(
//     userAuthPersistConfig,
//     usersSliceReducer
//   );