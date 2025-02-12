import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  module: 'React Mod7',
  username: '',
  email: '',
  password: 'mod7USIP-Grover',
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    clearFormData: (state) => {
      state.username = '';
      state.email = '';
      state.password = '';
    },
  },
});

export const { setFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;