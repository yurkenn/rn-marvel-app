import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login: state => {
      state.user = state.user;
      state.isAuthenticated = true;
      console.log('Login', state);
    },
    register: state => {
      state.user = state.user;
      state.isAuthenticated = true;
      console.log('Register', state);
    },
    logout: state => {
      state.user = null;
      state.isAuthenticated = false;
      console.log('Logout', state);
    },
  },
});

export const {login, logout, register} = userSlice.actions;
export const selectUser = state => state.user.user;
export default userSlice.reducer;
