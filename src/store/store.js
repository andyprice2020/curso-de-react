import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice.js'

// Create a Redux store instance
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;