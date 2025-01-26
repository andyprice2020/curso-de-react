import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    module:'React Mod7',
    username: '',
    email: '',
    password: 'mod7USIP-Grover'
  };

  export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: { },
  })
  
  export default formSlice.reducer