import { createSlice } from '@reduxjs/toolkit';

export const bankSlice = createSlice({
  name: 'bank',
  initialState: {
    loading: false,
    balance: 0,
  },
  reducers: {
    deposite: (state, action) => {
      state.balance += action.payload;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { deposite, withdraw } = bankSlice.actions;

export default bankSlice.reducer;
