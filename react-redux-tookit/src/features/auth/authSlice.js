import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedInUser: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    ['auth/login/success']: (state, action) => {
      console.log(action);
      state.loggedInUser = action.payload;
    },
  },
});

export const { login } = authSlice.actions;

export const loggedInUser = (state) => state.auth.loggedInUser;

export default authSlice.reducer;
