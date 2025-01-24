import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // Para este caso, aquí es donde definimos las variables globales del componente Counter.jsx
  // Para futuros desarrollos en la carpeta features estarán los slices que manejarán el estado del componente.
  value: 50,
  isLogged: 'false',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 10
    },
    decrement: (state) => {
      state.value -= 10
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer