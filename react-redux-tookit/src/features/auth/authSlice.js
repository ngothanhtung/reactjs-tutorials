import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: null,
    loggedInUser: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    ['auth/login/success']: (state, action) => {
      state.loggedInUser = action.payload;
    },

    ['auth/test']: (state, action) => {
      state.loading = true;
    },

    ['auth/test/success']: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export const { login } = authSlice.actions;

export const loggedInUser = (state) => state.auth.loggedInUser;

export default authSlice.reducer;
